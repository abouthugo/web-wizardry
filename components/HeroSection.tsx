"use client";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoCarousel from "./LogoCarousel";
import { Title } from "./Typography";

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
    <section className="min-h-screen" onClick={handleOnClick}>
      <div className="flex flex-col justify-center w-full text-center">
        <div className="mt-20 xl:mt-60 w-72 flex items-center justify-center p-6 mx-auto">
          <Image
            src="https://storage.googleapis.com/wizard-cdn-core/latest_3.jpg"
            alt="Profile picture"
            width="232"
            height="232"
            className="rounded-full border border-semi-transparent"
            priority
          />
        </div>
        <Title className="z-10">Hugo Perdomo</Title>
        <h2 className="text-center h-2 text-neutral-400 mb-10 max-w-md mx-auto">Professional pixel painter</h2>
        <div
          className={classNames("container transition-all duration-700 ease-in", {
            "opacity-0": !marqueeMounted,
            "scale-25": !marqueeMounted,
          })}
        >
          <LogoCarousel onMarqueeMounted={handleMarqueeMounted} />
        </div>
      </div>
    </section>
  );
}
