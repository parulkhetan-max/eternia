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

  const featureGroups = React.useMemo(() => {
    const groups: Feature[][] = []
    for (let i = 0; i < features.length; i += 4) {
      groups.push(features.slice(i, i + 4))
    }
    return groups
  }, [features])

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
          className="w-full features-carousel-mobile"
        >
          <CarouselContent className="-ml-4">
            {featureGroups.map((group, groupIndex) => (
              <CarouselItem
                key={groupIndex}
                className="pl-4 basis-full"
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {group.map((feature, featureIndex) => (
                    <div
                      key={`${groupIndex}-${featureIndex}`}
                      className="features-card-inner group h-full text-center p-3 sm:p-5 rounded-md sm:rounded-lg border border-[var(--color-green)] transition-all duration-300 hover:bg-[var(--color-blue)] hover:text-white hover:border-[var(--color-blue)] hover:shadow-lg flex flex-col min-h-[220px] sm:min-h-[280px]"
                    >
                      {/* Icon */}
                      <div className="mb-3 sm:mb-6 text-5xl flex items-center justify-center group-hover:brightness-0 group-hover:invert">
                        <img src={feature.icon} alt={feature.title} width={52} height={52} className="sm:w-20 sm:h-20 transition-all duration-300" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-xl text-[var(--color-green)] font-semibold sm:font-medium mb-2 sm:mb-4 group-hover:text-white transition-colors duration-300 leading-tight">{feature.title}</h3>

                      {/* Description */}
                      <p
                        className="text-[13px] sm:text-base text-[var(--color-green)] mb-3 sm:mb-6 group-hover:text-white transition-colors duration-300 flex-1 leading-snug"
                      >
                        {feature.description}
                      </p>

                      {/* Learn More Link */}
                      <a
                        href={feature.learnMoreLink}
                        className="inline-block underline text-sm sm:text-base transition-colors duration-300 group-hover:text-white mt-auto"
                      >
                        Learn More
                      </a>
                    </div>
                  ))}
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
