import HeroSection from "@/components/HeroSection";

import CarouselAnimation from "@/components/ScrollComponent/CarouselAnimation";
import ScrollContainer from "@/components/ScrolllContainer";

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="relative top-0 z-50 flex items-center justify-center w-full h-10 bg-white ">
        <span>Navbar</span>
      </div>
      <div className="sticky top-0 z-50 flex items-center justify-center w-full h-12 bg-white shadow-md">
        <span>Sticky Header</span>
      </div>
      <HeroSection />
      <CarouselAnimation />
      <ScrollContainer />
    </main>
  );
}
