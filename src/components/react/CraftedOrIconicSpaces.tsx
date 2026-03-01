import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface CraftedSpace {
  image: string
  icon?: string
  title?: string
  description: string
  link?: string
}

interface CraftedOrIconicSpacesProps {
  title: string
  spaces: CraftedSpace[]
}

export function CraftedOrIconicSpaces({
  title,
  spaces,
}: CraftedOrIconicSpacesProps) {
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
    <div className="py-14 sm:py-24 bg-white"
    style={{ backgroundImage: "url('/src/assets/iconicBG.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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
          <CarouselContent className="flex gap-4">
            {spaces.map((space, index) => (
              <CarouselItem
                key={index}
                className="basis-[calc(100%*2/3+4rem)] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 lg:basis-[calc(25%-0.75rem)] relative rounded-lg overflow-hidden group"
                // className="pl-4 relative rounded-lg"
              >
                <div className="h-full overflow-hidden rounded-lg">
                  {/* Image */}
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" /> */}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 py-2 px-3 text-white text-white bg-[#C4C4C4]/10 backdrop-blur-md crafted-iconic-content border border-white/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      {space.icon && (
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 icon">
                          <img
                            src={space.icon}
                            alt={space.title}
                            className=""
                          />
                        </div>
                      )}
                      <div>
                        {space.title && (
                          <p className="font-medium mb-0">{space.title}</p>
                        )}
                        <p className="text-sm text-white mb-0">
                          {space.description}
                        </p>
                        {space.link && (
                          <div className="flex items-center gap-2 mt-2 read-more">
                              <a href={space.link} className="text-sm text-white underline">Read more</a> 
                              <img src="/src/assets/arrow.svg" alt="" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation and Indicators */}
          <div className="flex justify-center items-center gap-4 mt-8 indicators">
            <CarouselPrevious className="relative static translate-y-0 bg-white text-[var(--color-green)] border-transparent rounded-full" />

            {/* Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border border-[var(--color-white)] ${
                    index === current
                      ? "bg-[var(--color-white)]"
                      : "bg-transparent"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselNext className="relative static translate-y-0 bg-white text-[var(--color-green)] border-transparent rounded-full" />
          </div>
        </Carousel>
        <a href="/modern-living" className="explore-more text-[var(--color-white)] underline flex justify-center mt-12">Explore More</a>
      </div>
    </div>
  )
}
