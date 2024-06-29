import Image from "next/image";
import React from "react";

export default function AppleTv() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className=" w-80">
        <img
          src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/apple_tv_app__d6nd1841aiie_large_2x.png"
          className="w-24 mb-4"
        />

        <span className="text-sm font-bold tracking-wide text-gray-400 md:text-lg">
          <span className="text-black ">Apple TV app.</span> Watch, rent, or buy
          your favorite shows and movies all in one expertly curated app. Enjoy
          critically acclaimed Apple Originals series and films from Apple TV+
          as they were meant to be seen. Subscribe to just the channels you
          want. And there are no new apps, accounts, or passwords needed for up
          to six family members.
        </span>

        <p className="mt-10 text-sm font-bold tracking-wide text-gray-400 md:text-lg">
          <span className="text-black ">Live TV.</span> Apple TV 4K is all you
          need to stream live TV from the world’s biggest and best networks,
          broadcasters, and pay TV providers. Watch sports from ESPN and MLB.
          Catch up with news from ABC, CNN, and Bloomberg. And kick back with
          shows on Hulu, YouTube TV, and Sling TV.3
        </p>
      </div>
    </div>
  );
}
