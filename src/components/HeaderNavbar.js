import Link from "next/link";
import React from "react";

const NAVBAR_LIST_ITEMS = [
  {
    redirectLink: "/",
    title: "Store",
  },
  {
    redirectLink: "/mac",
    title: "Mac",
  },
  {
    redirectLink: "/ipad",
    title: "iPad",
  },
  {
    redirectLink: "/iphone",
    title: "iPhone",
  },
  {
    redirectLink: "/watch",
    title: "Watch",
  },
  {
    redirectLink: "/vision",
    title: "Vision",
  },
  {
    redirectLink: "/airpods",
    title: "AirPods",
  },
  {
    redirectLink: "/tv-home",
    title: "TV & Home",
  },
  {
    redirectLink: "/entertainment",
    title: "Entertainment",
  },
  {
    redirectLink: "/accessories",
    title: "Accessories",
  },
  {
    redirectLink: "/support",
    title: "Support",
  },
];
export default function HeaderNavbar() {
  return (
    <div className="relative top-0 z-50 flex items-center justify-center w-full bg-white h-11 ">
      <div className="flex items-center justify-between max-w-[1024px]  h-full w-full px-4 ">
        <AppleLogo />

        <div className="items-center justify-center hidden gap-8 md:flex">
          {NAVBAR_LIST_ITEMS.map((item) => (
            <Link
              href={item.redirectLink}
              key={item.title}
              className="text-[12px] text-gray-600 "
              prefetch={false}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8">
          <SearchLogo />

          <CartLogo />
        </div>
      </div>
    </div>
  );
}

const AppleLogo = () => {
  return (
    <svg
      height="48"
      viewBox="0 0 17 48"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path>
    </svg>
  );
};

const SearchLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15px"
      height="44px"
      viewBox="0 0 15 44"
    >
      <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
    </svg>
  );
};

const CartLogo = () => {
  return (
    <svg
      height="44"
      viewBox="0 0 14 44"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"></path>
    </svg>
  );
};
