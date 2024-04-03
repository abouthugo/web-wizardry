"use client";
import { DateTime } from "luxon"

const Box = (props: { children: React.ReactNode }) => (
  <div className="text-center p-4 text-md">
    {props.children}
  </div>
)

export default function BigCountdown() {
  const bigDate = DateTime.fromISO("2024-11-09");
  const { months, weeks, days, hours, minutes } = bigDate.diffNow(["months", "weeks", "days", "hours", "minutes"]).toObject();
  return (
    <div className="text-white container mx-auto text-center mb-12">
      <h1 className="text-2xl">Wedding Day</h1>
      <div className="flex gap-2 justify-center">
        <Box>
          {months} Months
        </Box>
        {weeks >= 1 && <Box>
          {weeks} Weeks
        </Box>
        }
        <Box>
          {days} Days
        </Box>
        <Box>
          {hours && Math.floor(hours)} Hours
        </Box>
        <Box>
          {minutes && Math.floor(minutes)} Minutes
        </Box>
      </div>
    </div>
  )
}
