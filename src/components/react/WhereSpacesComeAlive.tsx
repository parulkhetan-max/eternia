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
  return (
    <div className="pt-24 bg-white">
      <div className="container-flex">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[var(--color-green)]">
            {title}
          </h2>
          <hr className="border-[var(--color-green)] mb-4 w-[40%] mx-auto" />
        </div>

        {/* Before/After Image Comparison */}
        <div className="relative w-full mb-8">
          <div className="flex gap-1 rounded-lg overflow-hidden h-96 md:h-96">
            {/* Before Image */}
            <div className="flex-1 relative">
              <img
                src={beforeImage}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4  border border-white text-white px-3 py-1 rounded-sm text-sm"
              style={{
                    backgroundImage: "url('/src/assets/btn-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                Before
              </div>
            </div>

            {/* Navigation Icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg">
              <svg
                className="w-6 h-6 text-[var(--color-green)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7M15 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* After Image */}
            <div className="flex-1 relative">
              <img
                src={afterImage}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4  border border-white text-white px-3 py-1 rounded-sm text-sm"
              style={{
                    backgroundImage: "url('/src/assets/btn-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                After
              </div>
            </div>
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
