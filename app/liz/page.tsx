"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ImageSet from "../../components/ImageSet";
import styles from "./page.module.css";

const HeartsComponent = () => {
  const heartWidth = 90;
  const heartHeight = 100;
  return (
    <div className="flex justify-center items-center mx-auto mt-12 mb-20">
      <div className="relative outline-none group">
        <Image
          className="relative z-10"
          src="/images/blended-heart-alt.png"
          width={heartWidth}
          height={heartHeight}
          alt="blue heart"
        />
        <div className="absolute left-0 top-0 h-full w-full duration-1500 ">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <Image
                className={styles["phantom-card"]}
                key={`${i}-phantom-image`}
                src="/images/blended-heart.png"
                width={heartWidth}
                height={heartHeight}
                alt="blue heart"
              />
            ))}
        </div>
      </div>
    </div>
  );
};
const months = [
  {
    title: "July",
    subTitle: "2023",
    srcList: [
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_3721.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_3678.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_4101.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_3838.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_2980.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_0310.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/july-23/IMG_0089.jpeg",
    ],
  },
  {
    title: "August",
    subTitle: "2023",
    srcList: [
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_1931.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_4064.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_0982.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_2505.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_4051.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_4083.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/aug-23/IMG_4097.jpeg",
    ],
  },
  {
    title: "September",
    subTitle: "2023",
    srcList: [
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_4284.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_4326.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_3302.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_1109.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_6618.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_F4F5E.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_3998.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/sep-23/IMG_3794.jpeg",
    ],
  },
  {
    title: "October",
    subTitle: "2023",
    srcList: [
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5731.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_4774.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_rendered.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_4851.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5044_jpg.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_247B.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_4987.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5288.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5096.jpeg",
      "https://storage.googleapis.com/wizard-cdn-core/oct-23/IMG_5106.jpeg",
    ],
  },
];

const NumberComponent = ({ moveTo }: { moveTo: number }) => {
  const [row, setRow] = useState(0);
  const x = 28;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRow(moveTo);
    });

    return () => {
      clearTimeout(timeout);
    };
  }, [moveTo]);
  return (
    <div className="flex flex-col overflow-hidden gap-3 max-h-6 w-fit text-center">
      <div
        id="counter"
        className="transiton ease-in-out"
        style={{
          transition: "translate 800ms cubic-bezier(.1,.67,0,1)",
          translate: `0rem ${x * -row}px`,
        }}
      >
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
};

export default function LizPage() {
  const [timeArray, setTimeArray] = useState(timeCalculation());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeArray(timeCalculation());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const [d, h, m, s] = timeArray;

  return (
    <main>
      <div
        id="time-dash"
        style={{ border: "1px solid rgb(255 255 255 / 10%)" }}
        className="flex relative mx-auto max-w-sm rounded-xl overflow-hidden justify-center text-zinc-100"
      >
        <Image
          fill
          src="/images/neon_bubbles_7.png"
          className="object-cover object-bottom animate-pulse"
          alt="bubbles"
        />
        <div
          style={{ border: "1px solid rgb(255 255 255 / 5%)" }}
          className="flex backdrop-blur-lg w-full h-full py-2 bg-[rgba(92, 88, 88, 0.2)]"
        >
          <div
            id="days"
            className="text-center text-lg px-4 w-44 border-r-2 border-zinc-400"
          >
            <div className="flex justify-center">
              {d
                .toString()
                .split("")
                .map((di, i) => (
                  <NumberComponent
                    key={`days-${di}-${i}index`}
                    moveTo={Number(di)}
                  />
                ))}
            </div>
            days
          </div>
          <div
            id="hours"
            className="text-center text-lg px-4 w-44 border-r-2 border-zinc-400"
          >
            <div className="flex justify-center">
              <NumberComponent moveTo={h > 9 ? Number(h.toString()[0]) : 0} />
              <NumberComponent moveTo={h > 9 ? Number(h.toString()[1]) : h} />
            </div>
            hours
          </div>
          <div
            id="minutes"
            className="text-center text-lg px-4 w-44 border-r-2 border-zinc-400"
          >
            <div className="flex justify-center">
              <NumberComponent moveTo={m > 9 ? Number(m.toString()[0]) : 0} />
              <NumberComponent moveTo={m > 9 ? Number(m.toString()[1]) : m} />
            </div>
            minutes
          </div>
          <div id="seconds" className="text-center text-lg px-4 w-44">
            <div className="flex justify-center">
              <NumberComponent moveTo={s > 9 ? Number(s.toString()[0]) : 0} />
              <NumberComponent moveTo={s > 9 ? Number(s.toString()[1]) : s} />
            </div>
            seconds
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 mx-auto mt-12 mb-4">
        {months.map(({ title, subTitle, srcList }) => {
          return (
            <ImageSet
              key={`${title}-${subTitle}`}
              title={title}
              subtitle={subTitle}
              srcList={srcList}
            />
          );
        })}
      </div>
      <div className="mx-4 mb-4 py-2 sm:mx-auto sm:max-w-lg sm:px-0">
        <p className="text-xl">
          <span className="bg-gradient-to-r from-lime-500 via-cyan-500 to-sky-500 text-transparent bg-clip-text font-bold">
            I love you
          </span>{" "}
          Elizabeth, happy 4 months!
        </p>
        <p className="text-xl">-Hugo</p>
      </div>
      <HeartsComponent />
    </main>
  );
}

function timeCalculation() {
  const anniversaryDate = new Date(2023, 6, 17, 15, 35);
  const timeDifference = new Date().getTime() - anniversaryDate.getTime();
  const MS = 1000;
  const S = 60;
  const M = 60;
  const H = 24;

  const days = Math.floor(timeDifference / (MS * S * M * H));
  const hours = Math.floor((timeDifference % (MS * S * M * H)) / (MS * S * M));
  const minutes = Math.floor((timeDifference % (MS * S * M)) / (MS * S));
  const seconds = Math.floor((timeDifference % (MS * S)) / MS);
  return [days, hours, minutes, seconds];
}
