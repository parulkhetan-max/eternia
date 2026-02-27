import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="py-15 bg-[var(--color-green)]">
      <div className="container-flex">
        {/* Header */}
        <div className="text-center mb-16">
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
                    backgroundImage: "url('/src/assets/Rectangle-shadow.jpg')",
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
                  <div className="w-full h-0.5 bg-white/10 mb-4" />

                  {/* Points */}
                  <ul className="space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-3 items-start">
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <img src="/src/assets/check-icon.svg" alt="" />
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

          {/* Mobile-only Indicators */}
          {count > 0 && (
            <div className="flex justify-center items-center gap-3 mt-10 md:hidden">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index + 1 === current
                      ? "bg-white w-3 h-3"
                      : "bg-white/50 w-2 h-2 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </Carousel>
      </div>
    </div>
  )
}
