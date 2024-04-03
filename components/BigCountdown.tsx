"use client";
import { DateTime } from "luxon";

const Box = (props: { children: React.ReactNode }) => <div className="text-center p-4 text-md">{props.children}</div>;

export default function BigCountdown() {
  const bigDate = DateTime.fromISO("2024-11-09");
  const { weeks, days, hours, minutes } = bigDate.diffNow(["weeks", "days", "hours", "minutes", "seconds"]).toObject();
  return (
    <div className="text-white container mx-auto text-center mb-12">
      <h1 className="text-2xl">Wedding Day</h1>
      <div className="flex gap-2 justify-center items-center">
        {weeks && weeks >= 1 ? <Box>{weeks} Weeks</Box> : null}
        {days && days >= 1 ? <Box>{days} Days</Box> : null}
        {hours && hours >= 1 ? <Box>{hours} Hours</Box> : null}
        {minutes && minutes >= 1 ? <Box>{minutes} Minutes</Box> : null}
      </div>
    </div>
  );
}