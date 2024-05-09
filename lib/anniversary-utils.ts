import { ensureDefined } from "@/lib/utils";
import { DateTime, type DurationUnits } from "luxon";

export const anniversaryDate = new Date(2023, 6, 17, 15, 35);
export const monthsBetween = () =>
  Math.floor(
    (new Date().getTime() - anniversaryDate.getTime()) /
      (1000 * 60 * 60 * 24 * 30),
  );

export const ensureTimeIsDefined = (
  time: FormattedTime,
): time is Required<FormattedTime> => {
  return (
    ensureDefined(time.days) &&
    ensureDefined(time.hours) &&
    ensureDefined(time.minutes) &&
    ensureDefined(time.seconds)
  );
};
export function getTimeSinceAnniversary(): FormattedTime {
  const durationUnits: DurationUnits = [
    "days",
    "hours",
    "minutes",
    "seconds",
    "millisecond",
  ];
  const anniversary = DateTime.fromJSDate(anniversaryDate);
  const td = anniversary.diffNow(durationUnits).negate().toObject();
  return td;
}

type FormattedTime = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
};
