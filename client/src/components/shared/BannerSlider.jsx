import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HiOutlineMicrophone } from "react-icons/hi2";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { GrPrevious, GrNext } from "react-icons/gr";

const BannerSlider = () => {
  const bannerImages = [
    { id: 1, image: "https://www.wickspin24.live/bannerImages/kv-evo.webp" },
    { id: 2, image: "https://www.wickspin24.live/bannerImages/kv-spribe.webp" },
    { id: 3, image: "https://www.wickspin24.live/bannerImages/kv-casino.webp" },
    { id: 4, image: "https://www.wickspin24.live/bannerImages/kv-netent.webp" },
    {
      id: 5,
      image: "https://www.wickspin24.live/bannerImages/kv-JDB-e-game.webp",
    },
  ];

  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Listen for the selected slide change
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Scroll to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        const nextIndex = (selectedIndex + 1) % bannerImages.length;
        api.scrollTo(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, selectedIndex, bannerImages.length]);

  const scrollTo = (index) => {
    api?.scrollTo(index);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % bannerImages.length;
    scrollTo(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex =
      (selectedIndex - 1 + bannerImages.length) % bannerImages.length;
    scrollTo(prevIndex);
  };

  return (
    <Carousel className="w-full" setApi={setApi}>
      <CarouselContent>
        {bannerImages.map((image, index) => (
          <CarouselItem key={image.id}>
            <div className="">
              <img
                className="w-full"
                src={image.image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Previous and Next Buttons */}
      <div className="absolute inset-0 flex justify-between items-center px-4 h-full">
        <Button
          onClick={handlePrevious}
          className="bg-transparent text-white text-2xl px-2 py-1"
        >
          <GrPrevious />
        </Button>
        <Button
          onClick={handleNext}
          className="bg-transparent text-white text-2xl px-2 py-1"
        >
          <GrNext />
        </Button>
      </div>

      <div className="px-3 opacity-90 text-black bg-white w-full py-1">
        <div className="flex items-center gap-4">
          <HiOutlineMicrophone className="text-xl md:text-2xl" />
          <Marquee className="text-xs md:text-sm">
            <ul className="flex items-center justify-between gap-20 font-bold">
              <li className="ms-8">
                Velki360.com আমাদের নতুন প্লাটর্ফম সাগতম খুব দ্রুত আমার প্লাটফম
                সরাসরি খেলা লাইভ হবে। ধন্যবাদ{" "}
              </li>
            </ul>
          </Marquee>
        </div>
      </div>
    </Carousel>
  );
};

export default BannerSlider;
