import React from "react";
import Link from "next/link";

export default function AppleMusic() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col w-80">
        <img
          src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/rooms/apple_music_app__dq9y5etz3zcm_large_2x.png"
          className="w-24 mb-4"
        />

        <span className="text-sm md:text-lg font-bold tracking-wide text-[#afe9c4]">
          <span className="text-white ">Apple Music.</span> Listen to over 100
          million songs, 30,000 playlists, and live radio on the big screen. You
          can even be your own video star with Apple Music Sing5 — sing top
          songs with real-time lyrics and adjustable vocals that let you take
          the lead, duet with the artist, or belt out backup harmonies.
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
