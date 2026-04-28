import { siteMetadata } from "@/data/siteMetaData";

export default function CVPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          CV
        </h1>
      </div>
      <div className="py-8">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My CV is available upon request. Please contact me at{" "}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {siteMetadata.email}
          </a>
        </p>
      </div>
    </div>
  );
}
