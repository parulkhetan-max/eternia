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
    <div className="pb-12 sm:pb-[50px] bg-[var(--color-green)]">
         {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="mb-6 text-white">
            {title}
          </h2>
          <hr className="border-white mb-4 w-[40%] mx-auto" />
        </div>
      <div className="relative">
        {/* Carousel with Side Shadows */}
        <div className="relative">
          {/* Left Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-green)] to-transparent z-10 pointer-events-none" />
          
          {/* Right Shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-green)] to-transparent z-10 pointer-events-none" />

          {/* Carousel */}
          <Carousel
            opts={{
              align: "center",
              loop: false,
            }}
            setApi={setApi}
            className="w-full"
          >
          <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-3">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-3 lg:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="h-full p-6 rounded-lg border border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 ">
                  {/* Quote Icon */}
                  <div className="mb-4 text-5xl text-white/40">
                  <img src="/assets/left-quote.svg" alt="" /></div>

                  {/* Quote */}
                  <p className="text-white/90 mb-6 leading-relaxed text-sm">
                    {testimonial.quote}
                  </p>

                  {/* Divider */}
                  <div>
                    <img src="/assets/hr.png" alt="hr" className="mb-4 w-full opacity-50" />
                  </div>

                  {/* Author */}
                  <div>
                    <p className="font-medium text-white text-sm mb-0">
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
                   className={`w-3 h-3 rounded-full transition-all duration-300 border border-[var(--color-white)] ${
                    index + 1 === current
                      ? "bg-[var(--color-white)]"
                      : "bg-transparent"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselNext className="relative static translate-y-0 bg-white text-[var(--color-green)] border-white hover:bg-white/90 rounded-full" />
          </div>
          </Carousel>
        </div>

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
