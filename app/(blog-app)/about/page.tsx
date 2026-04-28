import Image from "next/image";
import Avatar from "@/public/avatar.png";
import { siteMetadata } from "@/data/siteMetaData";
import SocialIcon from "@/components/ui/social-icons";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left column */}
        <div className="flex-shrink-0">
          <Image
            src={Avatar}
            alt="avatar"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
          <div className="mt-4 space-y-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Chen Xuanyu (陈炫羽)
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Hohai University
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Hydrology &amp; Water Resources
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon
                kind="mail"
                href={`mailto:${siteMetadata.email}`}
                size={5}
              />
              <SocialIcon kind="github" href={siteMetadata.github} size={5} />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl mb-4">
              About Me
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Junior at Hohai University studying hydrology. I&apos;m interested in
              deep learning applications for environmental forecasting — precipitation
              nowcasting, physics-informed models, and data fusion from multiple
              sources like satellite and ground observations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Research &amp; Interests
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
              Right now I&apos;m exploring AI Agent architectures and how they might help
              automate hydrology workflows. I&apos;ve worked with machine learning models
              like LightGBM and physics-informed neural networks for hydraulic
              prediction. I keep an eye on the latest work in weather prediction
              models — ConvLSTM, transformer-based approaches, and ideas around
              blending physical constraints with deep learning.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
              Building DUYA — a desktop AI Agent framework for hydrology workflows.
              Also working on HydroArray, trying to make hydrological models easier
              to plug into ML pipelines.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              What&apos;s Next
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
              Figuring out the next step. Building things matters more to me than a
              specific path — whether that&apos;s continuing in research or going
              deeper into AI agent development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
