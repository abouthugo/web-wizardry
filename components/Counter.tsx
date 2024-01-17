"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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

export default function Counter() {
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
  );
}
