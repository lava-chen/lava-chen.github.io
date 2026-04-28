import Image from "next/image";
import Avatar from "@/public/avatar.png";
import { siteMetadata } from "@/data/siteMetaData";
import SocialIcon from "@/components/ui/social-icons";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="space-y-6 pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          About Me
        </h1>
        <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg leading-relaxed">
          Junior at Hohai University, studying hydrology. Interested in using deep
          learning to improve precipitation nowcasting — particularly the physics-constrained
          kind, and the data fusion problem when you&apos;re trying to combine satellite
          products with ground observations.
        </p>
      </div>

      <div className="flex items-start gap-8 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex-shrink-0">
          <Image
            src={Avatar}
            alt="avatar"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Chen Xuanyu (陈炫羽)
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Hohai University · Hydrology &amp; Water Resources Engineering
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

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 py-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Research
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I&apos;ve worked on a LightGBM multi-source precipitation fusion project with Prof.
          Yong Bin, and a D-PINN hydraulic prediction project that went to ICIC 2026.
          Right now I&apos;m exploring physics-informed architectures for precipitation
          nowcasting — looking at ConvLSTM, Earthformer, and thinking about where
          conservation laws actually belong in modern transformer-based models.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Building DUYA — a desktop AI Agent framework for hydrology workflows. Also
          doing some infrastructure work with HydroArray, trying to make hydrological
          models easier to plug into ML pipelines.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          What&apos;s Next
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Applying for MPhil programs in precipitation nowcasting + deep learning.
          If that doesn&apos;t work out, I&apos;ll figure out a different path — building
          things matters more to me than a specific degree.
        </p>
      </div>
    </div>
  );
}
