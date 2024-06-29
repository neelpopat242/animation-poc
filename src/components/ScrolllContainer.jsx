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
  useMotionTemplate,
  motion,
} from "framer-motion";

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
      "https://www.apple.com/105/media/us/apple-tv-4k/2023/a128dbc4-3800-4bf9-9ccc-5a6c86669715/anim/tv+-sizzle/large.mp4",
    mediaType: "video",
  },
  {
    component: InSight,
    index: 3,
    styles: "bg-white",
    mediaUrl:
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/rooms/screen_insight__gltkr8q637iq_large.jpg",
    mediaType: "image",
  },
  {
    component: AppleFitness,
    index: 4,
    styles: "bg-[#00bb53]",
    mediaUrl:
      "https://www.apple.com/105/media/us/apple-tv-4k/2023/a128dbc4-3800-4bf9-9ccc-5a6c86669715/anim/fitness/large.mp4",
    mediaType: "video",
  },
  {
    component: AppleMusic,
    index: 5,
    styles: "bg-[#796bf2]",
    mediaUrl:
      "https://www.apple.com/105/media/us/apple-tv-4k/2023/a128dbc4-3800-4bf9-9ccc-5a6c86669715/anim/music/large.mp4",
    mediaType: "video",
  },
  {
    component: AppleArcade,
    index: 6,
    styles: "bg-red-400",
    mediaUrl:
      "https://www.apple.com/105/media/us/apple-tv-4k/2022/90c4e81a-c161-4f7f-9ea3-137ffd1054f5/anim/arcade/large.mp4",
    mediaType: "video",
  },
  {
    component: ApplePhotos,
    index: 7,
    styles: "bg-[#f5f5f7]",
    mediaUrl:
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/rooms/screen_photos__e7t2xddk2dei_large_2x.jpg",
    mediaType: "image",
  },
  {
    component: ScreenSavers,
    index: 8,
    styles: "bg-white",
    mediaUrl:
      "https://www.apple.com/105/media/us/apple-tv-4k/2024/899d3820-155e-49db-833e-cd0ca513ab8a/anim/screensavers/large.mp4",
    mediaType: "video",
  },
];

export default function ScrollContainer() {
  return (
    <>
      <ScrollContainerDesktop />
      <ScrollContainerMobile />
    </>
  );
}

function ScrollContainerDesktop() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scrollValue = useTransform(scrollYProgress, [0, 1], [100, 800]);

  return (
    <div className="w-full h-[800vh] relative hidden md:block " ref={targetRef}>
      <div className="h-[6.25%] border-5 border-black  sticky top-[25vh] mt-[15vh] z-10 flex items-center justify-center   left-[55%]  w-[45%] ">
        <div className="relative w-full h-full">
          {CONFIG.map((config, index) => (
            <MediaComponent
              key={index}
              index={index}
              scrollValue={scrollValue}
              mediaUrl={config.mediaUrl}
              mediaType={config.mediaType}
            />
          ))}
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
    [25 + index * HEIGHT, 75 + index * HEIGHT],
    [0, 1]
  );

  const transform = useMotionTemplate`matrix(1,0,0,${translateY}, 0 , 0)`;

  const stylesToUse = () => {
    if ([1, 2].includes(index)) {
      return {
        opacity: translateY,
      };
    } else {
      return {
        transform,
      };
    }
  };
  if (mediaType === "image") {
    return (
      <motion.div
        className="absolute inset-0 flex items-center justify-center w-full h-[500px] origin-bottom  aspect-video rounded-lg"
        style={{ ...stylesToUse() }}
      >
        <motion.img
          src={mediaUrl}
          alt="media"
          className="  h-[500px] rounded-lg"
        />
      </motion.div>
    );
  }
  return (
    <motion.div
      className="absolute inset-0 origin-bottom  aspect-video h-[500px] rounded-lg"
      style={{ ...stylesToUse() }}
    >
      <motion.video
        className="rounded-lg h-[500px] origin-bottom "
        muted
        loop
        autoPlay
        playsInline
      >
        <source src={mediaUrl} type="video/mp4" />
      </motion.video>
    </motion.div>
  );
};

function ScrollContainerMobile() {
  return (
    <div className="block md:hidden w-full h-[800vh] relative">
      {CONFIG.map((config, index) => (
        <div
          key={index}
          className={`${config.styles} h-[100vh]  flex  justify-center flex-col py-4`}
        >
          <div className="relative w-full basis-1/2 ">
            <div className="sticky w-[90%] h-full left-[10%] ">
              <MediaComponentMobile
                index={index}
                mediaUrl={config.mediaUrl}
                mediaType={config.mediaType}
              />
            </div>
          </div>
          <config.component />
        </div>
      ))}
    </div>
  );
}

const MediaComponentMobile = ({ mediaUrl, mediaType }) => {
  const ImageComponent = () => (
    <img
      src={mediaUrl}
      alt="media"
      className="  h-full aspect-[7/3] object-cover"
    />
  );

  const VideoComponent = () => (
    <video
      className=" origin-bottom h-full aspect-[7/3]  object-cover"
      muted
      loop
      autoPlay
      playsInline
    >
      <source src={mediaUrl} type="video/mp4" />
    </video>
  );

  return (
    <div className="flex items-center justify-center w-full h-full origin-bottom border-4 border-black ">
      {mediaType === "image" ? <ImageComponent /> : <VideoComponent />}
    </div>
  );
};
