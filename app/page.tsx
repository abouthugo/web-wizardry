import { Title } from "../components/Typography";
import Image from "next/image";
import CustomCard from "../components/CustomCard";
import styles from "./page.module.css";
import LogoCarousel from "../components/LogoCarousel";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex mx-auto text-center items-center justify-center -mt-40 mb-24">
        <div className="p-8 flex-col">
          <div className="relative flex items-center justify-center mx-auto">
            <div className="block absolute w-96 h-96 -right-[40px] md:right-2 z-0">
              <svg
                id="10015.io"
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#1e40af"
                  d="M369.5,298.5Q380,357,325.5,387.5Q271,418,206,414.5Q141,411,79,366Q17,321,34,246Q51,171,97.5,122.5Q144,74,209.5,58Q275,42,312.5,95Q350,148,354.5,194Q359,240,369.5,298.5Z"
                />
              </svg>
            </div>
            <Image
              src="https://storage.googleapis.com/wizard-cdn-core/latest_2.jpg"
              alt="Profile picture"
              width="232"
              height="232"
              className="rounded-full mb-5 z-10 relative"
              priority
            />
          </div>
          <Title className="relative z-10">Hugo Perdomo</Title>
          <h2 className="h-2 text-neutral-400 mb-10 max-w-md">
            Bridging bytes and brilliance
          </h2>
          <LogoCarousel />
          <span className="text-neutral-700 block mt-8 relative">
            swipe down
            <a href="#" className="scroll-icon"></a>
          </span>
        </div>
      </div>
      <div className="md:mb-60">
        <div className={styles["gradient-glow-wrapper"]}></div>
        <div className="relative min-w-screen bg-gradient-to-b md:bg-gradient-to-r from-blue-800 p-2 rounded-lg pb-3">
          <Title className="-mt-10">Past Lives</Title>
          <div className="flex-col space-y-2 md:space-y-0 md:grid md:grid-cols-4 gap-4">
            <CustomCard
              data={{
                from: "Feb 2022",
                to: "Apr 2023",
                tagline: "Software Engineer @Serrala",
                description:
                  "Worked on a cloud-based, tenant-oriented system. My primary focus was on developing innovative features, addressing client requests and incidents, enhancing observability of distribured logs, and continually improving every aspect of the development cycle.",
                tags: ["Frontend", "Backend", "Node.js", "Typescript"],
              }}
            />
            <CustomCard
              data={{
                from: "Jul 2019",
                to: "Feb 2022",
                tagline: "Backend Developer @Stetson",
                description:
                  "Developed internal web apps, CLIs, and collaborated with an external agency to establish our CI/CD workflow. Also deployed containerized applications on GKE, built a server to call various APIs to craft custom financial reports, and engineered a data warehousing solution for all our data needs.",
                tags: ["Frontend", "Backend", "Typescipt", "React"],
              }}
            />
            <CustomCard
              data={{
                from: "Sep 2018",
                to: "May 2019",
                tagline: "Research Assistant @Montclair State University",
                description:
                  "I had the opportunity to work on a fascinating project involving a dashboard that displayed data collected from packets circulating through highly censored servers. I was responsible for creating a real-time data visualization dashboard on React.",
                tags: ["Frontend", "Backend", "React", "Python"],
              }}
            />
            <CustomCard
              data={{
                from: "Sep 2018",
                to: "May 2019",
                tagline: "Web Support Intern @Montclair State University",
                description:
                  "Created informative WordPress posts, audited and replaced outdated plugins to enhance site performance and reliability, and helped debug and optimize our page layouts.",
                tags: ["Frontend", "PHP", "Javascript"],
              }}
            />
          </div>
        </div>
        <div className={styles["gradient-glow"]}></div>
      </div>
    </>
  );
}
