import HeaderNavbar from "@/components/HeaderNavbar";
import { HeroSection } from "@/components/HeroSection";
import { CarouselAnimation } from "@/components/ScrollComponent/CarouselAnimation";

import ScrollContainer from "@/components/ScrolllContainer";
import StickyNavbar from "@/components/StickyNavbar";

export default function Home() {
  return (
    <main className="relative w-full">
      <HeaderNavbar />
      <StickyNavbar />
      <HeroSection />
      <CarouselAnimation />
      <ScrollContainer />
    </main>
  );
}
