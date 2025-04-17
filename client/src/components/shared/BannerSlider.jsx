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
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const BannerSlider = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const sliderHomeControls = homeControls?.filter(
    (control) => control.category === "slider" && control.isSelected
  );
  const notice = homeControls?.find(
    (control) => control.category === "notice" && control.isSelected
  );

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
        const nextIndex = (selectedIndex + 1) % sliderHomeControls?.length;
        api.scrollTo(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, selectedIndex, sliderHomeControls?.length]);

  const scrollTo = (index) => {
    api?.scrollTo(index);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % sliderHomeControls?.length;
    scrollTo(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex =
      (selectedIndex - 1 + sliderHomeControls?.length) %
      sliderHomeControls?.length;
    scrollTo(prevIndex);
  };

  return (
    <Carousel className="w-full" setApi={setApi}>
      <CarouselContent>
        {sliderHomeControls?.map((image, index) => (
          <CarouselItem key={image._id}>
            <div className="">
              <img
                className="w-full"
                src={`${import.meta.env.VITE_BASE_API_URL}${image.image}`}
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
              <li className="ms-8">{notice?.title}</li>
            </ul>
          </Marquee>
        </div>
      </div>
    </Carousel>
  );
};

export default BannerSlider;
