import React from "react";
import Link from "next/link";

export default function AppleArcade() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col w-80 ">
        <img
          src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/rooms/apple_arcade_app__bpy1osgcepv6_large_2x.png"
          className="w-24 mb-4"
        />

        <span className="text-lg font-bold tracking-wide text-[#afe9c4]">
          <span className="text-white ">Apple Arcade.</span> Playing Apple
          Arcade games is even more immersive on your big screen.4 Multiuser
          support helps players keep track of their individual game levels,
          leaderboards, and invitations — and switch between players at any
          time. And you can connect more of your favorite controllers to Apple
          TV 4K, including PlayStation and Xbox Wireless controllers
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
