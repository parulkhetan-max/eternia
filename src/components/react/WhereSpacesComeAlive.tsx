import React from "react"

interface WhereSpacesComeAliveProps {
  title: string
  beforeImage: string
  afterImage: string
  viewAllLink?: string
}

export function WhereSpacesComeAlive({
  title,
  beforeImage,
  afterImage,
  viewAllLink = "#",
}: WhereSpacesComeAliveProps) {
  const [position, setPosition] = React.useState(50)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPosition = Number(e.target.value)
    setPosition(newPosition)
    if (containerRef.current) {
      containerRef.current.style.setProperty("--position", `${newPosition}%`)
    }
  }

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--position", `${position}%`)
    }
  }, [position])
  return (
    <div className="pt-[25px] sm:pt-[50px] bg-white"
    style={{ backgroundImage: "url('/assets/innovationBG.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container-flex">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="mb-6 text-[var(--color-green)]">
            {title}
          </h2>
          <hr className="border-[var(--color-green)] mb-4 w-[40%] mx-auto" />
        </div>

        {/* Before/After Image Slider */}
        <div className="relative w-full mb-8">
          <div
            ref={containerRef}
            className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg group"
            style={{ "--position": "50%" } as React.CSSProperties & { "--position": string }}
          >
            {/* After Image (Background) */}
            <img
              src={afterImage}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover object-left"
            />

            {/* Before Image (Overlay - Using Clip Path) */}
            <img
              src={beforeImage}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover object-left"
              style={{ clipPath: "inset(0 calc(100% - var(--position)) 0 0)" } as React.CSSProperties}
            />

            {/* Labels */}
            <div className="absolute top-4 left-4 border border-white text-white px-3 py-1 rounded-sm text-sm"
              style={{
                backgroundImage: "url('/assets/btn-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              Before
            </div>

            <div className="absolute top-4 right-4 border border-white text-white px-3 py-1 rounded-sm text-sm"
              style={{
                backgroundImage: "url('/assets/btn-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              After
            </div>

            {/* Slider Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: "var(--position)", transform: "translateX(-50%)" } as React.CSSProperties}
            >
              {/* Handle Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="flex ">
                  <img src="/assets/arrowL.svg" alt="arrow left" className="w-4 h-4" />
                  <img src="/assets/arrowR.svg" alt="arrow right" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Invisible Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={handleInputChange}
              className="absolute inset-0 w-full h-full cursor-col-resize opacity-0 z-20"
              style={{ cursor: "col-resize" }}
            />
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a
            href={viewAllLink}
            className="text-[var(--color-green)] hover:underline transition underline"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  )
}
