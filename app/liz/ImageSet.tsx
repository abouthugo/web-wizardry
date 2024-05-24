"use client";
import { SerifTitle } from "@components/Typography";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardPlayerControls from "./CardPlayerControls";
import CardSkeleton from "./CardSkeleton";

const sliderSpeed = 750;
const debugPane = false;

const isVideo = (src: string) => /\.(mp4|webm)$/.test(src);

export default function ImageSet({
  title = "July",
  subtitle = "2023",
  srcList = ["/first.jpeg"],
}: {
  title?: string;
  subtitle?: string;
  srcList?: string[];
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [loadedGrid, setLoadedGrid] = useState<boolean[]>(
    new Array(srcList.length).fill(false),
  );
  const hasCompletelyLoaded = () =>
    loadedGrid.reduce((prev, curr) => prev && curr);

  useEffect(() => {
    if (!playing) return;
    if (!loadedGrid.reduce((prev, curr) => prev && curr)) return;
    const timer = setInterval(() => {
      if (index < srcList.length - 1) {
        setIndex((state) => state + 1);
      } else {
        setIndex(0);
      }
    }, sliderSpeed);

    return () => {
      clearInterval(timer);
    };
  }, [index, srcList, playing, loadedGrid]);

  const togglePlay = () => {
    setPlaying(!playing);
  };
  const handleLoadingComplete =
    (index: number) =>
    (v: boolean, i: number): boolean => {
      if (i === index) {
        return true;
      }
      return v;
    };

  const renderMedia = (src: string, i: number) => {
    const commonClasses = `transition-opacity duration-300 ease-in-out object-cover object-bottom ${
      src !== srcList[index] ? "opacity-0" : "opacity-100"
    }`;

    if (isVideo(src)) {
      return (
        <video
          key={`${src}-${i}`}
          src={src}
          className={commonClasses}
          autoPlay
          loop
          muted
          onLoadedData={() =>
            setLoadedGrid((prevState) =>
              prevState.map(handleLoadingComplete(i)),
            )
          }
        />
      );
    }

    return (
      <Image
        key={`${src}-${i}`}
        src={src}
        fill
        sizes="(max-width: 768) 100vw;"
        className={commonClasses}
        alt="some-picture"
        onLoad={() =>
          setLoadedGrid((prevState) => prevState.map(handleLoadingComplete(i)))
        }
      />
    );
  };

  return (
    <div
      style={{ border: "1px solid rgb(255 255 255 / 15%)" }}
      className="text-white w-full h-[500px] sm:h-[700px] sm:max-w-lg sm:mx-auto rounded-3xl relative overflow-hidden"
    >
      {!hasCompletelyLoaded() && <CardSkeleton />}
      {srcList.map(renderMedia)}
      <div className="absolute bottom-0 left-0 w-full px-2 pb-2 bg-gradient-to-t from-[rgba(0,0,0,.45)] pt-8">
        <SerifTitle className="text-5xl">{title}</SerifTitle>
        <p className="font-thin text-lg">
          {subtitle}
          {debugPane && `::${index}`}
        </p>
      </div>
      {hasCompletelyLoaded() && (
        <CardPlayerControls onClick={togglePlay} playing={playing} />
      )}
    </div>
  );
}
