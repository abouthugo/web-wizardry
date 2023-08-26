import { Title } from "../components/Typography";
import CustomCard from "../components/CustomCard";
import styles from "./page.module.css";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="px-4 min-h-screen">
        <HeroSection />
        <section className="md:mb-8 static container mx-auto">
          <div className={styles["gradient-glow-wrapper"]}>
            <div className="relative min-w-screen bg-gradient-to-b md:bg-gradient-to-r from-blue-800 p-2 rounded-lg pb-3">
              <Title className="-mt-10">Past Lives</Title>
              <div className="flex-col space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
