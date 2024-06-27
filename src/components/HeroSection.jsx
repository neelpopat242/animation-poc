import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const dimension = useTransform(scrollYProgress, [0, 0.8], [1.8, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [200, 0]);
  const videoPosterOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

  const textVisibility = useTransform(
    scrollYProgress,
    [0.85, 0.9, 1],
    [0, 0.5, 1]
  );

  const transform = useMotionTemplate`matrix(${dimension},0,0,${dimension},0,${scale})`;

  return (
    <section
      className="h-[180dvh] relative bg-[#F5F5F7] w-screen "
      ref={targetRef}
    >
      <motion.div
        className="sticky top-36 h-[100dvh] pt-12"
        animate={{ transition: { type: "tween" } }}
        style={{ transform }}
      >
        <div className="space-y-0">
          <div>
            <div className="relative mx-auto h-[610px] w-3/5  overflow-hidden border-4 border-b-gray-900 ">
              <video
                className="object-cover w-full h-full transition duration-500 "
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/hero.mp4" />
              </video>
              <motion.img
                src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_staticframe__fc291ipcri2y_small_2x.jpg"
                className="absolute inset-0"
                style={{ opacity: videoPosterOpacity }}
              />
            </div>

            <motion.img
              src="https://www.apple.com/v/apple-tv-4k/aj/images/overview/hero/hero_tv_shadow_color__h0jua2c6nwi2_large.png"
              className="mx-auto "
              style={{ opacity: videoPosterOpacity }}
            />
          </div>

          <img
            src="https://www.apple.com/v/apple-tv-4k/ai/images/overview/hero/hero_tv_remote__da02803g5doy_large.png"
            className="relative z-50 object-contain h-32 mx-auto -translate-y-20 aspect-auto"
          />

          <motion.div
            className="w-3/5 mx-auto font-semibold text-center text-gray-400 -translate-y-14 "
            style={{
              opacity: textVisibility,
              transition: { duration: 1 },
            }}
          >
            <p className="">
              Apple&nbsp;TV&nbsp;4K unites your favorite Apple services with all
              your streaming apps in our best-ever picture and sound quality —
              thanks to the blazing‑fast A15&nbsp;Bionic chip. Enjoy a FaceTime
              experience on TV that brings your friends and family into your
              living room — and onto the biggest screen in your home. And with
              seamless interaction with all your devices and smart home
              accessories, it’s everything you love about Apple — at its
              cinematic best.
              <br />
              <br />
              <span className="">Starting at $129</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
