"use client";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoCarousel from "./LogoCarousel";
import { Title } from "./Typography";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const [marqueeMounted, setMarqueeMounted] = useState(false);

  const handleOnClick = () => {
    if (count === 17) router.push("/liz");
    setCount(count + 1);
  };

  const handleMarqueeMounted = () => {
    setMarqueeMounted(true);
  };

  return (
    <section className={styles.sectionWrapper} onClick={handleOnClick} onKeyUp={handleOnClick}>
      <div className={styles.herozone}>
        <div className="w-72 flex items-center justify-center p-6 mx-auto">
          <div className="border border-semi-transparent rounded-full overflow-clip">
            <Image
              src="https://storage.googleapis.com/wizard-cdn-core/latest_3.jpg"
              alt="Profile picture"
              width="232"
              height="232"
              priority
            />
          </div>
        </div>
        <Title className="animate-showup opacity-0">Hugo Perdomo</Title>
        <h2 className="text-center h-2 text-neutral-400 mb-10 max-w-md mx-auto opacity-0 animate-appear-up">
          Professional pixel painter
        </h2>
      </div>
      <div
        className={classNames("container min-h-[262px] opacity-0", {
          "animate-showup-1s": marqueeMounted,
        })}
      >
        <LogoCarousel onMarqueeMounted={handleMarqueeMounted} />
      </div>
    </section>
  );
}
