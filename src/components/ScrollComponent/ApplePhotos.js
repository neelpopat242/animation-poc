import Link from "next/link";
import React from "react";

export default function ApplePhotos() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col w-80">
        <img
          src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/rooms/photos_app__b3olup33x76u_large_2x.png"
          className="w-24 mb-4"
        />

        <span className="text-lg font-bold tracking-wide text-gray-400">
          <span className="text-black ">Photos.</span> iCloud Shared Photo
          Library makes it easier than ever for the whole family to enjoy each
          other’s photos, and you can see them all right on your TV. And you can
          choose Memories as your screen saver and watch your special moments
          come alive on the big screen.
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
