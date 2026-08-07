import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary?: string;
  draft?: boolean;
}

function readPostFile(slug: string) {
  const mdPath = path.join(contentDir, `${slug}.md`);
  const mdxPath = path.join(contentDir, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : mdxPath;
  if (!fs.existsSync(filePath)) return null;
  return {
    source: fs.readFileSync(filePath, "utf-8"),
    filePath,
  };
}

/** 返回所有非草稿文章，按日期倒序。 */
export function getAllPosts(): BlogPost[]  {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) =>
    /\.mdx?$/.test(f)
  );
  const posts = files.map((file) => {
    const source = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(source);
    return {
      slug: file.replace(/\.mdx?$/, ""),
      title:
        typeof data.title === "string" ? data.title : file,
      date: typeof data.date === "string" ? data.date : "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      summary:
        typeof data.summary === "string" ? data.summary : undefined,
      draft: Boolean(data.draft),
    };
  });
  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

/** 获取单篇文章的 frontmatter 与原始 Markdown 正文。 */
export function getPostBySlug(slug: string) {
  const result = readPostFile(slug);
  if (!result) return null;
  const { data, content } = matter(result.source);
  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary:
      typeof data.summary === "string" ? data.summary : undefined,
    draft: Boolean(data.draft),
    content,
  };
}

/** 将 Markdown 正文渲染为 HTML 字符串（支持 GFM 与 KaTeX 数学公式）。 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}