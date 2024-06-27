import React from "react";
import Link from "next/link";
export default function AppleFitness() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col w-80">
        <img
          src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/rooms/apple_fitness_app__f9n54te6kw2m_large_2x.png"
          className="w-24 mb-4"
        />

        <span className="text-lg font-bold tracking-wide text-[#afe9c4]">
          <span className="text-white ">Apple Fitness+.</span> Watch, rent, or
          buy your favorite shows and movies all in one expertly curated app.
          Enjoy critically acclaimed Apple Originals series and films from Apple
          TV+ as they were meant to be seen. Subscribe to just the channels you
          want. And there are no new apps, accounts, or passwords needed for up
          to six family members.
        </span>

        <Link
          href="https://www.apple.com/apple-tv-plus/"
          className="mt-2 text-white hover:underline"
        >
          {"Learn More >"}
        </Link>
      </div>
    </div>
  );
}
