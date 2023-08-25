"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      <div className="flex pt-8 mx-auto justify-center">
        <p className="text-center text-xl px-4 w-44 border-r-2 border-white">
          {d} days
        </p>
        <p className="text-center text-xl px-4 w-44 border-r-2 border-white">
          {h} {h === 1 ? "hour" : "hours"}
        </p>
        <p className="text-center text-xl px-4 w-44 border-r-2 border-white">
          {m} {m === 1 ? "minute" : "minutes"}
        </p>
        <p className="text-center text-xl px-4 w-44">
          {s} {s === 1 ? "second" : "seconds"}
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <Image
          src="/images/blended-heart-alt.png"
          width={200}
          height={220}
          alt="blue heart"
        />
      </div>
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
