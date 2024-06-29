import Link from "next/link";
import React from "react";

export default function InSight() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col w-80">
        <div className="bg-[#F563001A]  w-fit p-2 rounded-md mb-3">
          <span className="text-[#B64000]">Coming this fall</span>
        </div>

        <span className="text-sm font-bold tracking-wide text-gray-400 md:text-lg">
          <span className="text-black ">InSight</span> You can get information
          about Apple TV+ Original series and films as you watch them. Just
          bring up the media player controls to learn more about the actors on
          the screen and the music that’s playing. The details automatically
          update as the scene changes. And when you use iPhone as the Apple TV
          remote, InSight information appears in the palm of your hand.
        </span>

        <Link
          href="https://www.apple.com/apple-tv-plus/"
          className="mt-2 italic text-gray-400 hover:underline "
        >
          Stream severence on Apple TV+
        </Link>
      </div>
    </div>
  );
}
