import Link from "@/components/ui/Link";
import { siteMetadata } from "@/data/siteMetaData";
import SocialIcon from "@/components/ui/social-icons";

const projects = [
  {
    title: "DUYA",
    description:
      "Desktop AI Agent framework with hydrology-domain knowledge base and multi-tool orchestration.",
    href: "/projects",
  },
  {
    title: "HydroArray",
    description:
      "Python hydrology algorithm library integrating common hydrological models and ML models.",
    href: "/projects",
  },
  {
    title: "Personal Website",
    description:
      "This website — built with Next.js, featuring dark/pink theme toggle, blog system, and project showcase.",
    href: "/projects",
  },
];

export default async function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Hero Section */}
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I&apos;m Chen Xuanyu
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Undergraduate at Hohai University. Researching physics-constrained
            deep learning for precipitation nowcasting.
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              href="/about"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              About &rarr;
            </Link>
            <Link
              href="/projects"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Projects &rarr;
            </Link>
            <SocialIcon kind="github" href={siteMetadata.github} size={5} />
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
            Featured Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative flex flex-col rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-colors hover:border-primary-500 dark:hover:border-primary-500"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-500">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
