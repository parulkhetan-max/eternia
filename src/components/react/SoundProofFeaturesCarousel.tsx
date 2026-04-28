import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Feature {
  icon: string;
  title: string;
  learnMoreLink: string;
}

interface SoundProofFeaturesCarouselProps {
  title: string;
  features: Feature[];
  bgImage?: string;
}

export function SoundProofFeaturesCarousel({
  title,
  features,
  bgImage,
}: SoundProofFeaturesCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!api || !mounted) return;

    const timer = setTimeout(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    }, 50);

    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);

    return () => {
      clearTimeout(timer);
      api.off("select", handleSelect);
    };
  }, [api, mounted]);

  useEffect(() => {
    if (!api || !mounted) return;
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setTimeout(() => {
          setCount(api.scrollSnapList().length);
          setCurrent(api.selectedScrollSnap());
        }, 100);
      }, 150);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [api, mounted]);

  return (
    <div
      className="pt-[50px] pb-[40px]"
      style={{
        background: "linear-gradient(135deg, #0d2d3a 0%, #1a4a5a 100%)",
        ...(bgImage && {
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          background: "none",
          backgroundPosition: "bottom",
          paddingBottom: "100px",
        }),
      }}
    >
      <div className="container-flex">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="mb-5 text-white font-light sp-carousel-title"
            style={{ fontSize: "48px" }}
          >
            {title}
          </h2>
          <hr className="border-white mb-4 w-[40%] mx-auto" />
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: false }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/2 lg:basis-1/4"
              >
                <div
                  className="group h-full text-center p-5 rounded-lg transition-all duration-300 hover:bg-white/10 cursor-pointer flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "inset 0 0.5px 19.94px rgba(227, 222, 255, 0.10), inset 0 1.99px 8.97px rgba(227, 222, 255, 1.1)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center"
                    style={{ height: "80px" }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      width={70}
                      height={70}
                      className="transition-all duration-300"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white font-semibold mb-6 leading-snug flex-1"
                    style={{
                      fontSize: "20px",
                      minHeight: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      whiteSpace: "pre-line" ,
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Learn More */}
                  <a
                    href={feature.learnMoreLink}
                    className="text-white/70 text-sm underline underline-offset-2 hover:text-white transition-colors duration-300 mt-auto"
                  >
                    Learn More
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 bg-white text-[var(--color-green)] border-white hover:bg-white/90 rounded-full" />

            {/* Fixed 3 dots */}
            <div className="flex gap-2 items-center">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${
                    index === current ? "bg-white" : "bg-transparent"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselNext className="relative static translate-y-0 bg-white text-[var(--color-green)] border-white hover:bg-white/90 rounded-full" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

