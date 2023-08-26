"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoCarousel from "./LogoCarousel";
import { Title } from "./Typography";

export default function HeroSection() {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const handleOnClick = () => {
    if (count === 17) router.push("/liz");
    setCount(count + 1);
  };
  return (
    <section
      className="min-h-screen flex mx-auto text-center items-center justify-center -mt-40 mb-24"
      onClick={handleOnClick}
    >
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
    </section>
  );
}
