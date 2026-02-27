import React from "react"

interface CTASectionProps {
  title: string
  buttonText?: string
  buttonLink?: string
  backgroundImage: string
}

export function CTASection({
  title,
  buttonText = "Connect with Design Experts",
  buttonLink = "#",
  backgroundImage,
}: CTASectionProps) {
  return (
    <section
      className="relative py-32 md:py-48 flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container-flex text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          {title}
        </h2>
        <a
          href={buttonLink}
          className="inline-block text-white px-4 py-2 rounded-lg bg-[#C4C4C4]/10 backdrop-blur-md border border-white/50 transition-all duration-300 cursor-pointer"
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}
