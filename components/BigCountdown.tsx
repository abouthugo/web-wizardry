"use client";
import classNames from "classnames";
import { DateTime, type DurationUnit } from "luxon";
import type { PropsWithChildren, FunctionComponent } from "react";

type DateObject = {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type BoxProps = PropsWithChildren<{
  className?: string;
}>;

const Box: FunctionComponent<BoxProps> = ({ children, className }) => {
  return (
    <div className={classNames("text-center p-4 text-md", className)}>
      {children}
    </div>
  );
};

export default function BigCountdown() {
  const units: DurationUnit[] = [
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
  ];
  const wd = DateTime.fromISO("2024-11-09");
  const { weeks, days, hours, minutes } = wd
    .diffNow(units)
    .toObject() as DateObject;
  return (
    <div className="text-white container mx-auto text-center mb-12">
      <h1 className="text-2xl">Wedding Day</h1>
      <div className="flex gap-2 justify-center items-center">
        {weeks >= 1 ? <Box>{weeks} Weeks</Box> : null}
        {days >= 1 ? <Box>{days} Days</Box> : null}
        {hours >= 1 ? <Box>{hours} Hours</Box> : null}
        {minutes >= 1 ? <Box>{minutes} Minutes</Box> : null}
      </div>
    </div>
  );
}
