import Link from "next/link";
import React from "react";

export default function AppleTvPlus() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col w-80">
        <img
          src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/rooms/apple_tv_plus_logo__fjf3mdmyewmu_large_2x.png"
          className="w-24 mb-4"
        />

        <span className="text-lg font-bold tracking-wide text-gray-400">
          <span className="text-black ">Apple TV+</span> Watch series, feature
          films, kids’ entertainment, and more from the most creative minds in
          TV and movies — with new Apple Originals added every month.4
        </span>

        <Link
          href="https://www.apple.com/apple-tv-plus/"
          className="text-[#06c] mt-2 text-xl hover:underline"
        >
          {"Learn More >"}
        </Link>
      </div>
    </div>
  );
}
