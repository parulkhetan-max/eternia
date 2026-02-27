import React from "react"
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
    <div className="py-24 bg-[var(--color-blue-light)]">
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
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/4"
              >
                <div
                  className={`group h-full text-center p-6 rounded-lg border border-[var(--color-green)] transition-all duration-300 hover:bg-[var(--color-blue)] hover:text-white `}
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 text-5xl flex items-center justify-center group-hover:brightness-0 group-hover:invert`}
                  >
                    <img src={feature.icon} alt={feature.title} width={80} height={80} className="transition-all duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">{feature.title}</h3>

                  {/* Description */}
                  <p
                    className={`leading-relaxed mb-6 group-hover:text-white transition-colors duration-300`}
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
            <CarouselPrevious className="relative static translate-y-0 bg-white rounded-full border-transparent" />
            
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

            <CarouselNext className="relative static translate-y-0 bg-white rounded-full border-transparent" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
