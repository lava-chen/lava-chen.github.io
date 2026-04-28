import Image from "next/image";
import Avatar from "@/public/avatar.png";
import { siteMetadata } from "@/data/siteMetaData";
import SocialIcon from "@/components/ui/social-icons";

function Emoji({ symbol, label }: { symbol: string; label?: string }) {
  return (
    <span
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="about divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About Me
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            Hydrology, Machine Learning, and Precipitation Nowcasting.
          </p>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 sm:pt-28">
            <Image
              src={Avatar}
              alt="avatar"
              width={192}
              height={192}
              objectFit="cover"
              className="h-48 w-48 rounded-full"
            />

            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
              Chen Xuanyu (陈炫羽)
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              {siteMetadata.occupation}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {siteMetadata.school}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              Hydrology & Water Resources Engineering
            </div>

            <div className="mt-2 flex gap-3">
              <SocialIcon
                kind="mail"
                href={`mailto:${siteMetadata.email}`}
                size={6}
              />

              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            </div>
          </div>

          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">
            <h2>Education</h2>
            <ul>
              <li>
                <strong>Bachelor of Engineering in Hydrology & Water Resources Engineering</strong>
                <br />
                Hohai University (河海大学), Nanjing, China
                <br />
                GPA: 4.29/5.0 | Expected Graduation: June 2027
              </li>
            </ul>

            <h2>Research Interests</h2>
            <p>
              Physics-constrained deep learning for precipitation nowcasting.
              Interested in integrating physical conservation laws into neural network
              architectures for more reliable hydrological predictions.
            </p>

            <h2>Research Experience</h2>
            <h3>1. D-PINN: Physics-Informed Neural Networks for Hydraulic Prediction</h3>
            <p>
              <em>ICIC 2026 Oral Presentation (3rd Author)</em>
              <br />
              Developed physics-informed neural networks with dual-encoder architecture
              incorporating Saint-Venant conservation laws for hydraulic prediction tasks.
            </p>

            <h3>2. LightGBM Multi-source Precipitation Fusion</h3>
            <p>
              <em>Under Prof. Yong Bin</em>
              <br />
              Built a three-stage fusion model combining satellite precipitation (FY-3G, GPM)
              and gauge data. Achieved significant improvements: CC 0.739&rarr;0.891,
              POD 0.524&rarr;0.997 in Fujian mountainous terrain.
            </p>

            <h3>3. DUYA: Desktop AI Agent Framework</h3>
            <p>
              Self-built desktop AI Agent framework using Electron + Vite with hydrology-domain
              knowledge base and multi-tool orchestration for autonomous satellite data
              retrieval and flood warning workflows.
            </p>

            <h2>Awards</h2>
            <ul>
              <li>MCM/ICM Meritorious Award</li>
              <li>National Math Competition Provincial First Prize</li>
            </ul>

            <h2>Skills</h2>
            <ul>
              <li><strong>Programming:</strong> Python, PyTorch, LightGBM</li>
              <li><strong>Data:</strong> Satellite precipitation data (FY-3G, GPM, CLDAS)</li>
              <li><strong>Tools:</strong> Git, Docker</li>
            </ul>

            <h2>Contact</h2>
            <p>
              Email: <a href="mailto:2301010227@hhu.edu.cn">2301010227@hhu.edu.cn</a>
              <br />
              GitHub: <a href="https://github.com/lava-chen">github.com/lava-chen</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
