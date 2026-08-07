import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          我的技术笔记与随笔
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="py-8 text-gray-500 dark:text-gray-400">No posts yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post) => (
            <li key={post.slug} className="py-6">
              <article className="space-y-2">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={post.date}>{post.date}</time>
                  </dd>
                </dl>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.summary && (
                    <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {post.summary}
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}