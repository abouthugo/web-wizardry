"use client";
import { anniversaryDate } from "@lib/anniversary-utils";
import { DateTime } from "luxon";
import Image from "next/image";
import { type PropsWithChildren, useEffect, useState } from "react";
import NumberCell from "./NumberCell";

function timeCalculation() {
  const now = DateTime.now();
  const anniversary = DateTime.fromJSDate(anniversaryDate);
  const td = now.diff(anniversary, ["days", "hours", "minutes", "seconds"]).toObject();
  return td;
}

type SecProps = {
  id: string
  last?: boolean
}
const Section = (props: PropsWithChildren<SecProps>) => {
  const border = props.last ? '' : 'border-r-2 border-zinc-400';
  return (
    <div id={props.id} className={`text-center text-lg px-4 w-44 ${border}`}>
      <div className="flex justify-center">
        {props.children}
      </div>
      hours
    </div>
  )
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

  const { days: d, hours: h, minutes: m, seconds: s } = timeArray;
  console.log(timeArray);
  if (!d || !h || !m || !s) return <div>Nothing to see</div>
  return (
    <div
      id="time-dash"
      style={{ border: "1px solid rgb(255 255 255 / 10%)" }}
      className="flex relative mx-auto max-w-sm rounded-xl overflow-hidden justify-center text-zinc-100"
    >
      <Image fill src="/images/neon_bubbles_7.png" className="object-cover object-bottom animate-pulse" alt="bubbles" />
      <div
        style={{ border: "1px solid rgb(255 255 255 / 5%)" }}
        className="flex backdrop-blur-lg w-full h-full py-2 bg-[rgba(92, 88, 88, 0.2)]"
      >
        <Section id="days">
          {d.toString()
            .split("")
            .map((di, i) => (
              <NumberCell key={`days-${di}-${i}index`} moveTo={Number(di)} />
            ))}
        </Section>
        <Section id="hours">
          <NumberCell moveTo={h > 9 ? Number(h.toString()[0]) : 0} />
          <NumberCell moveTo={h > 9 ? Number(h.toString()[1]) : h} />
        </Section>
        <Section id="minutes">
          <NumberCell moveTo={m > 9 ? Number(m.toString()[0]) : 0} />
          <NumberCell moveTo={m > 9 ? Number(m.toString()[1]) : m} />
        </Section>
        <Section id="seconds" last >
          <NumberCell moveTo={s > 9 ? Number(s.toString()[0]) : 0} />
          <NumberCell moveTo={s > 9 ? Number(s.toString()[1]) : s} />
        </Section>
      </div>
    </div>
  );
}
