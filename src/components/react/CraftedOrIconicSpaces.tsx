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
  icon: string
  title: string
  description: string
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
    <div className="py-24 bg-white">
      <div className="container-flex">
        {/* Header */}
        <div className="text-center mb-16">
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
            {spaces.map((space, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="h-full">
                  {/* Image */}
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover "
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" /> */}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-3 mb-2 hidden">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <img
                          src={space.icon}
                          alt={space.title}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">{space.title}</h3>
                        <p className="text-xs text-white/80">
                          {space.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation and Indicators */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 bg-white text-[var(--color-green)] border-transparent rounded-full" />

            {/* Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border border-[var(--color-green)] ${
                    index + 1 === current
                      ? "bg-[var(--color-green)]"
                      : "bg-transparent"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselNext className="relative static translate-y-0 bg-white text-[var(--color-green)] border-transparent rounded-full" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
