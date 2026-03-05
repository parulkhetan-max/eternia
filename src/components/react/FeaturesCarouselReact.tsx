import React, { useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface Feature {
  icon: string
  title: string
  description: string
  learnMoreLink: string
}

interface FeaturesCarouselReactProps {
  title: string
  subtitle?: string
  features: Feature[]
}

export function FeaturesCarouselReact({
  title,
  features,
}: FeaturesCarouselReactProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [mounted, setMounted] = React.useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!api || !mounted) {
      return
    }

    // Small delay to ensure carousel has fully initialized
    const timer = setTimeout(() => {
      const scrollSnapList = api.scrollSnapList()
      setCount(scrollSnapList.length)
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
  useEffect(() => {
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
    <div className="pt-[50px] pb-[25px] sm:pt-25 sm:pb-[50px] bg-[var(--color-blue-light)]">
      <div className="container-flex">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="mb-6 text-[var(--color-green)]">
            {title}
          </h2>
          <hr className="border-[var(--color-green)] mb-4 w-[40%] mx-auto" />
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
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/4"
              >
                <div
                  className={`group h-full text-center p-6 rounded-lg border border-[var(--color-green)] transition-all duration-300 hover:bg-[var(--color-blue)] hover:text-white hover:border-[var(--color-blue)] hover:shadow-lg`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 text-5xl flex items-center justify-center group-hover:brightness-0 group-hover:invert`}
                  >
                    <img src={feature.icon} alt={feature.title} width={80} height={80} className="transition-all duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-[var(--color-green)] font-medium mb-4 group-hover:text-white transition-colors duration-300">{feature.title}</h3>

                  {/* Description */}
                  <p
                    className={`text-[var(--color-green)] mb-6 group-hover:text-white transition-colors duration-300`}
                  >
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href={feature.learnMoreLink}
                    className={`inline-block underline transition-colors duration-300 group-hover:text-white`}
                  >
                    Learn More
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation with Indicators */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 bg-white rounded-full border-transparent shadow-md text-[var(--color-green)]" />
            
            {/* Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border border-[var(--color-green)] ${
                    index === current
                      ? "bg-[var(--color-green)]"
                      : "bg-transparent border-[var(--color-green)]"
                  }`} 
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselNext className="relative static translate-y-0 bg-white rounded-full border-transparent shadow-md text-[var(--color-green)]" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
