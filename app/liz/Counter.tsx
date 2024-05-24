"use client";
import {
  getTimeSinceAnniversary,
  ensureTimeIsDefined,
} from "@lib/anniversary-utils";
import Image from "next/image";
import { type PropsWithChildren, useEffect, useState } from "react";
import NumberCell from "./NumberCell";

type SectionProps = {
  id: string;
  last?: boolean;
};
const Section = (props: PropsWithChildren<SectionProps>) => {
  const border = props.last ? "" : "border-r-2 border-zinc-400";
  return (
    <div id={props.id} className={`text-center text-lg px-4 w-44 ${border}`}>
      <div className="flex justify-center">{props.children}</div>
      {props.id}
    </div>
  );
};

export default function Counter() {
  const [timeArray, setTimeArray] = useState(getTimeSinceAnniversary());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeArray(getTimeSinceAnniversary());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (!ensureTimeIsDefined(timeArray)) return <div>Nothing to see</div>;
  const { days: d, hours: h, minutes: m, seconds: s } = timeArray;
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
        <Section id="days">
          {d
            .toString()
            .split("")
            .map((di, index) => (
              <NumberCell key={`days-${di}-${index}`} moveTo={Number(di)} />
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
        <Section id="seconds" last>
          <NumberCell moveTo={s > 9 ? Number(s.toString()[0]) : 0} />
          <NumberCell moveTo={s > 9 ? Number(s.toString()[1]) : s} />
        </Section>
      </div>
    </div>
  );
}
