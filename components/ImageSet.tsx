"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SerifTitle } from "./Typography";

const iconSize = 24;
const iconColor = "#ffffff";
const sliderSpeed = 1000;
const debugPane = false;

const PlayIcon = ({ fill = true }: { fill?: Boolean }) => {
  return (
    <svg
      width={`${iconSize}px`}
      height={`${iconSize}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={iconColor}
      strokeWidth="1.5"
    >
      <path
        d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z"
        fill={fill ? iconColor : "none"}
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

const StopIcon = ({ fill = true }: { fill?: Boolean }) => {
  return (
    <svg
      width={`${iconSize}px`}
      height={`${iconSize}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={iconColor}
      strokeWidth="1.5"
    >
      <path
        d="M6 18.4V5.6C6 5.26863 6.26863 5 6.6 5H9.4C9.73137 5 10 5.26863 10 5.6V18.4C10 18.7314 9.73137 19 9.4 19H6.6C6.26863 19 6 18.7314 6 18.4Z"
        fill={fill ? iconColor : "none"}
        stroke={iconColor}
        strokeWidth="1.5"
      ></path>
      <path
        d="M14 18.4V5.6C14 5.26863 14.2686 5 14.6 5H17.4C17.7314 5 18 5.26863 18 5.6V18.4C18 18.7314 17.7314 19 17.4 19H14.6C14.2686 19 14 18.7314 14 18.4Z"
        fill={fill ? iconColor : "none"}
        stroke={iconColor}
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};
const Skeleton = () => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div className="flex items-center justify-center w-full h-[500px] sm:h-[700px] rounded bg-neutral-800">
        <svg
          className="w-10 h-10 text-zinc-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
};
const PlaybackControls = ({
  onClick,
  playing,
}: {
  onClick: () => void;
  playing: Boolean;
}) => {
  return (
    <div className="absolute bottom-0 right-0 p-2">
      <div
        className="bg-[rgba(255,255,255,.1)] py-3 px-3 rounded-full cursor-pointer backdrop-blur-sm backdrop-hue-rotate-90"
        onClick={onClick}
      >
        {playing ? <StopIcon /> : <PlayIcon />}
      </div>
    </div>
  );
};

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
  const [loadedGrid, setLoadedGrid] = useState<Boolean[]>(
    new Array(srcList.length).fill(false)
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
    (v: Boolean, i: number): Boolean => {
      if (i === index) {
        return true;
      }
      return v;
    };

  const renderMedia = (src: string, i: number) => {
    const commonClasses = `transition ease-in-out object-cover object-bottom ${
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
              prevState.map(handleLoadingComplete(i))
            )
          }
        />
      );
    } else {
      return (
        <Image
          key={`${src}-${i}`}
          src={src}
          fill
          className={commonClasses}
          alt="some-picture"
          onLoadingComplete={() =>
            setLoadedGrid((prevState) =>
              prevState.map(handleLoadingComplete(i))
            )
          }
        />
      );
    }
  };

  return (
    <div
      style={{ border: "1px solid rgb(255 255 255 / 15%)" }}
      className="w-full h-[500px] sm:h-[700px] sm:max-w-lg sm:mx-auto rounded-xl relative overflow-hidden"
    >
      {!hasCompletelyLoaded() && <Skeleton />}
      {srcList.map(renderMedia)}
      <div className="absolute bottom-0 left-0 w-full px-2 pb-2 bg-gradient-to-t from-[rgba(0,0,0,.45)] pt-8">
        <SerifTitle>{title}</SerifTitle>
        <p className="font-thin text-lg">
          {subtitle}
          {debugPane && `::${index}`}
        </p>
      </div>
      {hasCompletelyLoaded() && (
        <PlaybackControls onClick={togglePlay} playing={playing} />
      )}
    </div>
  );
}
