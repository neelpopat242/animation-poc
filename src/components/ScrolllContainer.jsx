import React, { useRef, useState } from "react";
import ParentWrapperContainer from "./ParentWrapperContainer";
import AppleTv from "./ScrollComponent/AppleTv";
import AppleTvPlus from "./ScrollComponent/ApplyTvPlus";
import InSight from "./ScrollComponent/Insight";
import AppleFitness from "./ScrollComponent/AppleFitness";
import ScreenSavers from "./ScrollComponent/ScreenSavers";
import ApplePhotos from "./ScrollComponent/ApplePhotos";
import AppleArcade from "./ScrollComponent/AppleArcade";
import AppleMusic from "./ScrollComponent/AppleMusic";
import {
  useTransform,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useMotionTemplate,
  motion,
} from "framer-motion";

export default function ScrollContainer() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {});

  const scrollValue = useTransform(scrollYProgress, [0, 1], [0, 800]);

  const CONFIG = [
    {
      component: AppleTv,
      index: 1,
      styles: "bg-white",
      mediaUrl:
        "https://www.apple.com/105/media/us/apple-tv-4k/2024/3244f166-f48e-467a-b2b2-79e9d1a919f8/anim/screen-tv-app/large.mp4",
      mediaType: "video",
    },
    {
      component: AppleTvPlus,
      index: 2,
      styles: "bg-white",
      mediaUrl:
        "https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_staticframe__fc291ipcri2y_small_2x.jpg",
      mediaType: "image",
    },
    {
      component: InSight,
      index: 3,
      styles: "bg-white",
      mediaUrl:
        "https://www.apple.com/105/media/us/apple-tv-4k/2024/3244f166-f48e-467a-b2b2-79e9d1a919f8/anim/screen-tv-app/large.mp4",
      mediaType: "video",
    },
    {
      component: AppleFitness,
      index: 4,
      styles: "bg-[#00bb53]",
      mediaUrl:
        "https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_staticframe__fc291ipcri2y_small_2x.jpg",
      mediaType: "image",
    },
    {
      component: AppleMusic,
      index: 5,
      styles: "bg-[#796bf2]",
      mediaUrl:
        "https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_staticframe__fc291ipcri2y_small_2x.jpg",
      mediaType: "image",
    },
    {
      component: AppleArcade,
      index: 6,
      styles: "bg-red-400",
      mediaUrl:
        "https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_staticframe__fc291ipcri2y_small_2x.jpg",
      mediaType: "image",
    },
    {
      component: ApplePhotos,
      index: 7,
      styles: "bg-[#f5f5f7]",
      mediaUrl:
        "https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_staticframe__fc291ipcri2y_small_2x.jpg",
      mediaType: "image",
    },
    {
      component: ScreenSavers,
      index: 8,
      styles: "bg-white",
      mediaUrl:
        "https://www.apple.com/105/media/us/apple-tv-4k/2024/3244f166-f48e-467a-b2b2-79e9d1a919f8/anim/screen-tv-app/large.mp4",
      mediaType: "video",
    },
  ];

  return (
    <div className="w-full h-[800vh] relative " ref={targetRef}>
      <div className="h-[510px] border-5 border-black  sticky top-[25vh]  z-10 flex items-center justify-center  w-[45%] left-[55%]  aspect-video ">
        <div className="relative w-full h-full">
          {/* {CONFIG.map((config, index) => (
            <MediaComponent
              key={index}
              index={index}
              scrollValue={scrollValue}
              // dimension={dimension}
              mediaUrl={config.mediaUrl}
              mediaType={config.mediaType}
            />
          ))} */}
        </div>
      </div>

      <div className="absolute inset-0 w-full ">
        {CONFIG.map((config, index) => (
          <ParentWrapperContainer key={index} styles={config.styles}>
            <config.component />
          </ParentWrapperContainer>
        ))}
      </div>
    </div>
  );
}

const HEIGHT = 100;
const MediaComponent = ({ mediaUrl, mediaType, scrollValue, index }) => {
  const translateY = useTransform(
    scrollValue,
    [index * HEIGHT, (index + 1) * HEIGHT],
    [0, 1]
  );

  const scaleY = useTransform(translateY, [0, 1], [50, 1]);

  const transform = useMotionTemplate`matrix(1,0,0,${translateY}, 0 , 0)`;

  const transformScaleY = useMotionTemplate`scaleY(${scaleY})`;

  if (mediaType === "image") {
    return (
      <div className="absolute inset-0 debug-border" style={{ transform }}>
        <motion.img
          style={{ transform: transformScaleY }}
          src={mediaUrl}
          alt="media"
          className="object-contain w-full h-full rounded-lg "
        />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 debug-border" style={{ transform }}>
      <motion.video
        style={{ transform: transformScaleY }}
        className="object-contain w-full h-full "
        muted
        loop
        autoPlay
        playsInline
      >
        <source src={mediaUrl} type="video/mp4" />
      </motion.video>
    </div>
  );
};
