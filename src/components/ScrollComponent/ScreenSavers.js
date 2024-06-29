import Link from "next/link";
import React from "react";

export default function ScreenSavers() {
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <div className="flex flex-col w-80">
        <span className="text-sm font-bold tracking-wide text-gray-400 md:text-lg">
          <span className="text-black ">Screen savers. </span> Mesmerizing
          visuals take you to the most stunning locations on the earth and
          beyond. They can also showcase photos of your cherished moments and
          loved ones, and soon Snoopy and Woodstock will join the fun with
          playful animations for the whole family.7
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
