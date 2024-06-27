import React, { useEffect } from "react";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

export function SlideAnimationDisplay({ baseVelocity = 100, mediaObject }) {
  const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const velocityFactor = useTransform(scrollVelocity, [0, 1500], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = (delta / 1000) * velocityFactor.get() * 5 * baseVelocity;

    // Change direction based on scroll velocity
    if (velocityFactor.get() < 0) {
      moveBy = baseVelocity * Math.abs(moveBy);
    } else if (velocityFactor.get() > 0) {
      moveBy = -1 * baseVelocity * Math.abs(moveBy);
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex w-full gap-2 my-2 overflow-hidden ">
      <motion.div className="flex w-[150vw] gap-8 " style={{ x }}>
        {mediaObject.map((media, index) => {
          return (
            <div key={index} className="w-full h-48 aspect-video">
              <img
                src={media}
                alt="media"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
