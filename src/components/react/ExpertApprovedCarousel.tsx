import React from "react"

interface Testimonial {
    image: string
    videoThumbnail: string
    videoLink: string
    name: string
    role?: string
    title?: string
    instagram?: string
}

interface ExpertApprovedCarouselProps {
    title: string
    testimonials: Testimonial[]
}

export function ExpertApprovedCarousel({
    title,
    testimonials,
}: ExpertApprovedCarouselProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [screenSize, setScreenSize] = React.useState<"mobile" | "tablet" | "desktop">("mobile")
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        // Set initial screen size
        const width = window.innerWidth
        if (width < 769) {
            setScreenSize("mobile")
        } else if (width < 1025) {
            setScreenSize("tablet")
        } else {
            setScreenSize("desktop")
        }
        setMounted(true)

        // Handle resize
        const handleResize = () => {
            const width = window.innerWidth
            if (width < 769) {
                setScreenSize("mobile")
            } else if (width < 1025) {
                setScreenSize("tablet")
            } else {
                setScreenSize("desktop")
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const moveCarousel = (direction: "left" | "right") => {
        if (isAnimating) return

        setIsAnimating(true)
        let newIndex = currentIndex

        if (direction === "left") {
            newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
        } else {
            newIndex = (currentIndex + 1) % testimonials.length
        }

        setCurrentIndex(newIndex)

        setTimeout(() => {
            setIsAnimating(false)
        }, 600)
    }

    const goToSlide = (index: number) => {
        if (!isAnimating) {
            setCurrentIndex(index)
        }
    }

    const getCardPosition = (index: number) => {
        let position = index - currentIndex

        if (position < -2) {
            position += testimonials.length
        } else if (position > 2) {
            position -= testimonials.length
        }

        return position
    }

    return (
        <div className="py-12 sm:py-24 bg-[var(--color-blue-light)]">
            <div className="container-flex">
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="text-[var(--color-green)] mb-6">{title}</h2>
                    <hr className="border-[var(--color-green)] mb-4 w-[40%] mx-auto" />
                </div>

                <div className="relative w-full pt-10">
                    <div className="relative h-80 sm:h-96 flex items-center justify-center overflow-visible p-4 sm:p-10 md:p-20">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {mounted && testimonials.map((testimonial, index) => {
                                const position = getCardPosition(index)
                                let transform = "scale(0.7) translateX(0)"
                                let opacity = 0
                                let zIndex = 0

                                // Mobile (< 768px)
                                if (screenSize === "mobile") {
                                    if (position === 0) {
                                        transform = "scale(1) translateX(0)"
                                        opacity = 1
                                        zIndex = 30
                                    } else if (position === -1) {
                                        transform = "scale(0.85) translateX(-40%)"
                                        opacity = 0.9
                                        zIndex = 20
                                    } else if (position === 1) {
                                        transform = "scale(0.85) translateX(40%)"
                                        opacity = 0.9
                                        zIndex = 20
                                    } else if (position === 2 || position === -2) {
                                        transform = "scale(0.75) translateX(0)"
                                        opacity = 0
                                        zIndex = 10
                                    }
                                } else if (screenSize === "tablet") {
                                    // Tablet (768px - 1024px - 4 cards visible)
                                    if (position === 0) {
                                        transform = "scale(1) translateX(0)"
                                        opacity = 1
                                        zIndex = 30
                                    } else if (position === -1) {
                                        transform = "scale(0.88) translateX(-60%)"
                                        opacity = 0.9
                                        zIndex = 20
                                    } else if (position === 1) {
                                        transform = "scale(0.88) translateX(60%)"
                                        opacity = 0.9
                                        zIndex = 20
                                    } else if (position === 2) {
                                        transform = "scale(0.78) translateX(120%)"
                                        opacity = 0.85
                                        zIndex = 10
                                    } else if (position === -2) {
                                        transform = "scale(0.78) translateX(-120%)"
                                        opacity = 0.85
                                        zIndex = 10
                                    }
                                } else {
                                    // Desktop (>= 1024px)
                                    if (position === 0) {
                                        transform = "scale(1) translateX(0)"
                                        opacity = 1
                                        zIndex = 30
                                    } else if (position === -1) {
                                        transform = "scale(0.85) translateX(102%)"
                                        opacity = 0.9
                                        zIndex = 20
                                    } else if (position === 1) {
                                        transform = "scale(0.85) translateX(-102%)"
                                        opacity = 0.9
                                        zIndex = 20
                                    } else if (position === 2) {
                                        transform = "scale(0.75) translateX(215%)"
                                        opacity = 0.9
                                        zIndex = 10
                                    } else if (position === -2) {
                                        transform = "scale(0.75) translateX(-215%)"
                                        opacity = 0.9
                                        zIndex = 10
                                    }
                                }

                                return (
                                    <div
                                        key={index}
                                        className="absolute transition-all duration-500 ease-out"
                                        style={{
                                            transform,
                                            opacity,
                                            zIndex,
                                        }}
                                    >
                                        <div className="relative w-56 sm:w-64 md:w-72 h-full rounded-2xl overflow-hidden shadow-2xl group">
                                            <img
                                                src={testimonial.videoThumbnail}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:to-black/80 transition-all duration-300" />

                                            {testimonial.title && (
                                                <div className="absolute top-4 right-4 shadow-lg">
                                                    <img src="src/assets/aditya-birla.svg" alt="" />
                                                </div>
                                            )}

                                            {position === 0 && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <a
                                                        href={testimonial.videoLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-110 group-hover:scale-100"
                                                    >
                                                        <svg
                                                            className="w-8 h-8 text-[var(--color-green)] ml-1"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            )}

                                            <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center hidden">
                                                <div className="flex items-center gap-3">
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-7 h-7 rounded-full" />
                                                    <p className="text-white m-0">
                                                        {testimonial.name}
                                                    </p>
                                                    {testimonial.role && (
                                                        <p className="text-gray-200 text-sm mt-1">
                                                            {testimonial.role}
                                                        </p>
                                                    )}
                                                </div>
                                                {testimonial.instagram && (
                                                    <a
                                                        href={testimonial.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-block text-white hover:text-gray-300 transition-colors"
                                                    >
                                                        <svg
                                                            className="w-5 h-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.203 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-8 mt-20">
                        <button
                            onClick={() => moveCarousel("left")}
                            className="relative static translate-y-0 bg-[var(--color-green)] rounded-full border-transparent w-10 h-10 flex items-center justify-center transition-colors duration-300"
                            aria-label="Previous slide"
                        >
                            <svg
                                className="w-5 h-5 text-[var(--color-white)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Indicators */}
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                                            ? "bg-[var(--color-green)] w-3 h-3"
                                            : "bg-transparent border border-[var(--color-green)] w-2 h-2"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                    aria-current={index === currentIndex ? "true" : "false"}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => moveCarousel("right")}
                            className="relative static translate-y-0 bg-[var(--color-green)] rounded-full border-transparent w-10 h-10 flex items-center justify-center transition-colors duration-300"
                            aria-label="Next slide"
                        >
                            <svg
                                className="w-5 h-5 text-[var(--color-white)]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
