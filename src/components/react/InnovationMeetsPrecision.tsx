'use client'

import { useState, useEffect } from "react"

interface Feature {
    id: string
    label: string
    desc: string
    position: 'storm' | 'wider' | 'rattle' | 'noise' | 'rugged' | 'security' | 'drips' | 'peace' | 'indian' | 'smooth' | 'sealing'
    width?: string
    carouselGroup?: number
}

interface CarouselSlide {
    image: string
    features: Feature[]
}

interface InnovationMeetsPrecisionProps {
    features?: Feature[]
    mainImage?: string
    title?: string
    carouselSlides?: CarouselSlide[]
}

const pillPositions: Record<string, React.CSSProperties> = {
    storm: { top: "-75px", left: "210px" },
    wider: { top: "-75px", left: "530px" },
    rattle: { top: "-75px", left: "680px" },
    noise: { top: "-33px", right: "46px" },
    rugged: { top: "97px", left: "-8px" },
    security: { bottom: "110px", left: "17px" },
    drips: { top: "88px", right: "-38px" },
    peace: { top: "189px", right: "-18px" },
    indian: { bottom: "-9px", left: "157px" },
    smooth: { bottom: "-40px", left: "533px" },
    sealing: { bottom: "-30px", right: "28px" },
}

// Responsive breakpoints for pill positions
const getResponsivePositions = (screenWidth: number): Record<string, React.CSSProperties> => {
    if (screenWidth < 480) {
        return {
            storm: { top: "-50px", left: "5%" },
            wider: { top: "-50px", left: "35%" },
            rattle: { top: "-50px", left: "65%" },
            noise: { top: "-50px", right: "5%" },
            rugged: { top: "60px", left: "-15px" },
            security: { bottom: "60px", left: "-15px" },
            drips: { top: "60px", right: "-15px" },
            peace: { top: "120px", right: "-15px" },
            indian: { bottom: "-25px", left: "5%" },
            smooth: { bottom: "-25px", left: "calc(50% - 50px)" },
            sealing: { bottom: "-25px", right: "5%" },
        }
    } else if (screenWidth < 768) {
        return {
            storm: { top: "-60px", left: "10%" },
            wider: { top: "-60px", left: "40%" },
            rattle: { top: "-60px", left: "70%" },
            noise: { top: "-60px", right: "5%" },
            rugged: { top: "80px", left: "-20px" },
            security: { bottom: "100px", left: "-20px" },
            drips: { top: "80px", right: "-20px" },
            peace: { top: "150px", right: "-20px" },
            indian: { bottom: "-25px", left: "15%" },
            smooth: { bottom: "-25px", left: "calc(50% - 80px)" },
            sealing: { bottom: "-25px", right: "10%" },
        }
    } else if (screenWidth < 1024) {
        return {
            storm: { top: "-70px", left: "100px" },
            wider: { top: "-70px", left: "520px" },
            rattle: { top: "-70px", left: "720px" },
            noise: { top: "-20px", right: "70px" },
            rugged: { top: "100px", left: "-20px" },
            security: { bottom: "120px", left: "-20px" },
            drips: { top: "100px", right: "-20px" },
            peace: { top: "200px", right: "5px" },
            indian: { bottom: "-25px", left: "200px" },
            smooth: { bottom: "-25px", left: "calc(50% - 80px)" },
            sealing: { bottom: "-25px", right: "30px" },
        }
    }
    return pillPositions
}

export function InnovationMeetsPrecision({
    features = [],
    mainImage = "/image 103.jpg",
    title = "When Innovation Meets Perfection",
    carouselSlides = []
}: InnovationMeetsPrecisionProps) {
    const [active, setActive] = useState<string | null>(null)
    const [screenWidth, setScreenWidth] = useState<number>(1240)
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
        setScreenWidth(window.innerWidth)
        
        const handleResize = () => setScreenWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const responsivePositions = getResponsivePositions(screenWidth)
    const isCarouselView = screenWidth < 768

    // Determine if using custom carousel slides or grouped features
    const useCustomCarousel = carouselSlides.length > 0
    let slidesToShow: CarouselSlide[] = []

    if (useCustomCarousel) {
        slidesToShow = carouselSlides
    } else {
        // Group features by carouselGroup for mobile view
        const groupedFeatures = features.reduce((acc, feature) => {
            const group = feature.carouselGroup ?? 1
            if (!acc[group]) acc[group] = []
            acc[group].push(feature)
            return acc
        }, {} as Record<number, Feature[]>)

        slidesToShow = Object.values(groupedFeatures)
            .sort()
            .map((groupFeatures) => ({
                image: mainImage,
                features: groupFeatures,
            }))
    }

    const currentSlideData = slidesToShow[currentSlide] || { image: mainImage, features: [] }

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slidesToShow.length)
    }

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slidesToShow.length) % slidesToShow.length)
    }

    return (
        <section className="home-section-c innovation-meets-precision-section sm:pt-[50px] sm:pb-[20px] py-[25px]">
            <div className="container-flex mx-auto px-4">
                <div className="text-center mb-0 sm:mb-18">
                    <h2 className="text-[var(--color-green)] mb-6">{title}</h2>
                    <hr className="border-[var(--color-green)] mb-4 w-[40%] mx-auto" />
                </div>

                <div className="w-full flex justify-center">
                    {/* Desktop View - All pills around one image */}
                    <div className="hidden md:block w-full" style={{ maxWidth: "1240px" }}>
                        <div className="home-section-c-big-image-box relative w-full">
                            {/* Floating Pills */}
                            {features.map((f) => {
                                const pos = responsivePositions[f.position]
                                return (
                                    <div
                                        key={f.id}
                                        className="image_floting-box absolute bg-[var(--color-blue-light)] border border-[var(--color-green)] px-5 py-3 rounded-full d-inline-block"
                                        style={{
                                            ...(f.width && { width: f.width }),
                                            ...pos,
                                        } as React.CSSProperties}
                                      
                                    >
                                        <h6 className="floting-title text-sm font-medium text-gray-900 mb-0">
                                            {f.label}
                                        </h6>
                                        <p className="floting-description text-xs text-gray-600 mt-0.5 mb-0">
                                            {f.desc}
                                        </p>
                                    </div>
                                )
                            })}

                            {/* Main Image */}
                            <img
                                src={mainImage}
                                alt={title}
                                className="main_image_big w-full"
                                style={{
                                    maxWidth: "700px",
                                    margin: "0 auto",
                                    display: "block",
                                }}
                            />
                        </div>
                    </div>

                    {/* Mobile View - Carousel with different images */}
                    {isMounted && screenWidth < 768 && (
                        <div className="flex flex-col items-center innovation_box_main">
                            <div className="home-section-c-big-image-box-mob md:hidden block w-full mb-6">
                                {/* Carousel Slide */}
                                {currentSlideData.features.map((f, index) => {
                                    if (currentSlide === 1 && index === 4) {
                                        return null
                                    }

                                    const carouselPos: React.CSSProperties = {
                                        top: "0px",
                                        left: "-76px",
                                    }
                                    if (index === 1) {
                                        carouselPos.top = "0px"
                                        carouselPos.left = "auto"
                                        carouselPos.right = "-75px"
                                    } else if (index === 2) {
                                        carouselPos.top = "-65px"
                                        carouselPos.right = "auto"
                                        carouselPos.left = "30px"
                                    } else if (index === 3) {
                                        carouselPos.top = "auto"
                                        carouselPos.bottom = "0px"
                                        carouselPos.left = "-80px"
                                        carouselPos.right = "180px"
                                    } else if (index === 4) {
                                        carouselPos.bottom = "-64px"
                                        carouselPos.top = "auto"
                                        carouselPos.left = "10%"
                                        // carouselPos.display = "none"
                                    } else if (index === 5) {
                                        carouselPos.bottom = "-5px"
                                        carouselPos.top = "auto"
                                        carouselPos.left = "160px"
                                        carouselPos.right = "-75px"
                                    }

                                    return (
                                        <div
                                            key={f.id}
                                            className="image_floting-box absolute bg-[var(--color-blue-light)] border border-[var(--color-green)] px-4 py-2 rounded-full d-inline-block"
                                            style={{
                                                ...carouselPos,
                                            } as React.CSSProperties}
                                            onClick={() => setActive(active === f.id ? null : f.id)}
                                        >
                                            <h6 className="floting-title text-xs font-semibold text-gray-900 mb-0">
                                                {f.label}
                                            </h6>
                                            <p className="floting-description text-xs text-gray-600 mt-0.5 mb-0 line-clamp-2">
                                                {f.desc}
                                            </p>
                                        </div>
                                    )
                                })}

                                {/* Main Image */}
                                <img
                                    src={currentSlideData.image}
                                    alt={title}
                                    className="main_image_big w-full"
                                    style={{
                                        maxWidth: "100%",
                                        margin: "0 auto",
                                        display: "block",
                                    }}
                                />
                            </div>

                            {/* Carousel Controls */}
                            <div className="flex items-center justify-center gap-4 mb-6 mt-28">
                                <button
                                    onClick={handlePrevSlide}
                                    className="p-2 rounded-full bg-[var(--color-green)] text-white hover:bg-opacity-90 transition-all"
                                    aria-label="Previous slide"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Slide Indicators */}
                                <div className="flex gap-2">
                                    {slidesToShow.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-[var(--color-green)] w-2" : "bg-transparent border border-[var(--color-green)]"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={handleNextSlide}
                                    className="p-2 rounded-full bg-[var(--color-green)] text-white hover:bg-opacity-90 transition-all"
                                    aria-label="Next slide"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}