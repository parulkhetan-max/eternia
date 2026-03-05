import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface WhyChooseEterniaItem {
  icon: string
  title: string
  subtitle: string
  points: string[]
}

interface WhyChooseEterniaCarouselProps {
  items: WhyChooseEterniaItem[]
}

export function WhyChooseEterniaCarousel({
  items = [],
}: WhyChooseEterniaCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!api || !mounted) {
      return
    }

    const timer = setTimeout(() => {
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
    }, 50)

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)

    return () => {
      clearTimeout(timer)
      api.off("select", handleSelect)
    }
  }, [api, mounted])

  // Handle window resize to recalculate carousel layout
  React.useEffect(() => {
    if (!api || !mounted) {
      return
    }

    let resizeTimer: ReturnType<typeof setTimeout>

    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        // Recalculate scroll snaps on resize with delay
        setTimeout(() => {
          const scrollSnapList = api.scrollSnapList()
          setCount(scrollSnapList.length)
          setCurrent(api.selectedScrollSnap())
        }, 100)
      }, 150)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener("resize", handleResize)
    }
  }, [api, mounted])

  return (
    <div className="py-12 sm:py-[50px]"
      style={{ backgroundImage: "url('/assets/whyBG.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container-flex">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="mb-6 text-white">
            Why Choose Eternia
          </h2>
          <hr className="border-white mb-4 w-[40%] mx-auto" />
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div
                  className={`h-full p-6 rounded-lg border border-white/30 transition-all duration-300 hover:border-white/60`}
                  style={{
                    backgroundImage: "url('/assets/Rectangle-shadow.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Icon */}
                  <div className={`mb-2 flex items-center justify-start`}>
                    <img src={item.icon} alt={item.title}  />
                  </div>
                  {/* Subtitle */}
                  <p className="text-sm text-white/80 mb-4">
                    {item.subtitle}
                  </p>

                  {/* Divider */}
                    <div>
                    <img src="/assets/hr.png" alt="hr" className="mb-4 w-full opacity-50" />
                  </div>

                  {/* Points */}
                  <ul className="space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-3 items-start">
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <img src="/assets/check-icon.svg" alt="" />
                        </div>
                        <span className="text-sm text-white/80 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Mobile Navigation - Indicators and Arrows */}
          {count > 0 && (
            <div className="flex justify-center items-center gap-4 mt-10 md:hidden">
              <CarouselPrevious className="relative static translate-y-0 bg-white text-[var(--color-green)] border-white rounded-full hover:bg-white/30 transition-colors" />
              
              <div className="flex justify-center items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-white w-3 h-3"
                        : "bg-transparent w-2 h-2 border border-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="relative static translate-y-0 bg-white text-[var(--color-green)] border-white rounded-full hover:bg-white/30 transition-colors" />
            </div>
          )}
        </Carousel>
      </div>
    </div>
  )
}
