"use client";
import { monthsBetween } from "@lib/anniversary-utils";

export default function ClientMessage() {
  return (
    <div className="mx-4 mb-4 py-2 sm:mx-auto sm:max-w-lg sm:px-0 text-white">
      <p className="text-xl">
        <span className="bg-gradient-to-r from-lime-500 via-cyan-500 to-sky-500 text-transparent bg-clip-text font-bold">
          I love you
        </span>{" "}
        Elizabeth, happy {monthsBetween()} months!
      </p>
      <p className="text-xl">-Hugo</p>
    </div>
  );
}
