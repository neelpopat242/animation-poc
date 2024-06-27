import React from "react";
import { SlideAnimationDisplay } from "./SlideAnimationDisplay";

export default function CarouselAnimation() {
  const displayArray = {
    0: [
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_transformers__bmueqzjwxdki_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_blue_beetle__eza3rhv8qeuu_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_usher__fnj66k41zfau_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_fitness-01__euu0pdyutgae_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_futurama__ebdih5da9oia_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_the_righteous_gemstones__fcqyww0lwea2_large_2x.jpg",
    ],
    1: [
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_star-wars__evu436xd6vwy_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_jennifer_lopez__fh4ox66uvfmi_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_the_morning_show__yumliuvx0o2m_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_ice_spice__l26whmes7ey6_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_subway__fm90srki876u_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_fitness-02__bsnju4h2ykk2_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_tyla__fxw9l4yfreaa_large_2x.jpg",
    ],
    2: [
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_fitness-04__e2kqqjvucbee_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_hijack__bljlnk9xkynm_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_true_detective__cqpqkz4eic2u_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_gear-club__geyo7ckipviy_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_lasso__dectx3ui90ae_large_2x.jpg",
      "https://www.apple.com/v/apple-tv-4k/aj/images/overview/entertainment/river_ariana_grande__bltlsfsi59o2_large_2x.jpg",
    ],
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-[120dvh] ">
      <div className="flex flex-col items-center justify-center mx-auto  px-[450px] gap-6 mb-6 mt-12">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <h2 className="text-5xl font-bold text-center">
          Channeling the best of TV. And the best of Apple.
        </h2>

        <p className="px-12 text-lg text-center text-gray-400">
          Discover award-winning Apple Originals series and films — with other
          favorites on Disney+, Prime Video, Netflix, Max, ESPN,3 and more.
          Experience world‑class workouts, superfun games, and exciting ways to
          enjoy hit music you’ll find only from Apple. And explore thousands of
          other top apps in the App Store. There’s more on Apple TV 4K than just
          TV.
        </p>
      </div>
      <SlideAnimationDisplay mediaObject={displayArray[0]} baseVelocity={1} />
      <SlideAnimationDisplay mediaObject={displayArray[1]} baseVelocity={-1} />
      <SlideAnimationDisplay mediaObject={displayArray[2]} baseVelocity={1} />
    </div>
  );
}
