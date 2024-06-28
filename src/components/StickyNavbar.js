import React from "react";

export default function StickyNavbar() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center w-full h-12 bg-white shadow-md">
      <div className="max-w-[1024px] flex items-center justify-between  w-full">
        <div>
          <h4 className="text-[22px] ">Apple TV 4K</h4>
        </div>

        <div>
          <button className="bg-[#0071E3] rounded-3xl px-3 py-1 text-white/80 text-[12px] mb-[2px]">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
