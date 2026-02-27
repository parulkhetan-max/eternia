import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface Testimonial {
  quote: string
  author: string
  role?: string
}

interface CustomerTestimonialsProps {
  title: string
  testimonials: Testimonial[]
  exploreMoreLink?: string
}

export function CustomerTestimonials({
  title,
  testimonials,
  exploreMoreLink = "#",
}: CustomerTestimonialsProps) {
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
    <div className="py-24 bg-[var(--color-green)]">
         {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6 text-white">
            {title}
          </h2>
          <hr className="border-white mb-4 w-[40%] mx-auto" />
        </div>
      <div className="container-full">
        {/* Carousel */}
        <Carousel
          opts={{
            align: "center",
            loop: false,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 lg:pl-8 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="h-full p-6 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-105 hover:z-10">
                  {/* Quote Icon */}
                  <div className="mb-4 text-5xl text-white/40">
                  <img src="/src/assets/left-quote.svg" alt="" /></div>

                  {/* Quote */}
                  <p className="text-white/90 mb-6 leading-relaxed text-sm">
                    {testimonial.quote}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-0.5 bg-white/10 mb-4" />

                  {/* Author */}
                  <div>
                    <p className="font-bold text-white text-sm">
                      {testimonial.author}
                    </p>
                    {testimonial.role && (
                      <p className="text-white/60 text-xs">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation and Indicators */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 bg-white text-[var(--color-green)] border-white hover:bg-white/90 rounded-full" />

            {/* Indicators */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index + 1 === current
                      ? "bg-white w-3 h-3"
                      : "bg-white/40 w-2 h-2 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselNext className="relative static translate-y-0 bg-white text-[var(--color-green)] border-white hover:bg-white/90 rounded-full" />
          </div>
        </Carousel>

        {/* Explore More Link */}
        <div className="text-center mt-12">
          <a
            href={exploreMoreLink}
            className="text-white underline transition"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  )
}
