import React, { useState } from "react"

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    products: false,
    byType: false,
    byRoom: false,
    whyEternia: false,
    findWindow: false,
    features: false,
    contact: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <footer className="bg-[var(--color-blue-light)]">
      <div className="container-flex py-[50px] border-b border-gray-200">
        <div className="md:text-center mb-16">
          <div className="flex justify-between md:justify-center items-center gap-10 sm:gap-28 mb-6">
            <img src="/assets/logo-dark.png" alt="Eternia" className="h-16" />
            <img src="/assets/image 119.jpg" alt="Aditya Birla" className="h-16" />
          </div>

          <p className="text-[var(--color-green)] text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            Eternia is the latest product offering from Hindalco (Aditya Birla Group): India's first WiWA© tested and certified windows made with a specially invented Duranium™ alloy
          </p>

          <div className="flex md:justify-center gap-6">
            <a
              href="#"
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[var(--color-green)] hover:bg-gray-50 transition-colors"
              aria-label="LinkedIn"
            >
              <img src="/assets/linkedin.svg" alt="LinkedIn" className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[var(--color-green)] hover:bg-gray-50 transition-colors"
              aria-label="Facebook"
            >
              <img src="/assets/Shape.svg" alt="Facebook" className="h-4 w-4" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[var(--color-green)] hover:bg-gray-50 transition-colors"
              aria-label="Instagram"
            >
              <img src="/assets/instagram.svg" alt="Instagram" className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[var(--color-green)] hover:bg-gray-50 transition-colors"
              aria-label="YouTube"
            >
              <img src="/assets/bxl-youtube.svg" alt="YouTube" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mb-8 w-full">
          <img src="/assets/blue-hr.svg" alt="hr line" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 md:border-0 border-t border-[var(--color-green)] pt-4">
          {/* Products Section */}
          <div>
            <button
              onClick={() => toggleSection("products")}
              className="w-full md:pointer-events-none md:cursor-default flex items-center justify-between md:border-0 border-b border-[var(--color-green)]"
            >
              <p className="font-bold text-[var(--color-green)]">Products</p>
              <img src="/assets/downArrow.svg" alt="" 
              className={`md:hidden w-3 h-3 transition-transform mb-4 ${
                  openSections.products ? "rotate-180" : ""
                }`}/>
            </button>

            <ul
              className={`space-y-2 overflow-hidden transition-all duration-300 md:mt-0 mt-2 ${
                openSections.products ? "max-h-96 mb-4" : "max-h-0 md:max-h-96"
              }`}
            >
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  By range
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Eternia Duraslim Edge
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Eternia Duraslim
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Eternia Essentials
                </a>
              </li>
            </ul>

            {/* By Type Section */}
            <button
              onClick={() => toggleSection("byType")}
              className="md:mt-4 w-full md:pointer-events-none md:cursor-default flex items-center justify-between md:border-0 border-b border-[var(--color-green)] pt-1"
            >
              <p className="font-bold text-[var(--color-green)]">By type</p>
              <img src="/assets/downArrow.svg" alt="" 
              className={`md:hidden w-3 h-3 transition-transform mb-4 ${
                  openSections.byType ? "rotate-180" : ""
                }`}/>
            </button>

            <ul
              className={`space-y-2 overflow-hidden transition-all duration-300 md:mt-0 mt-2 ${
                openSections.byType ? "max-h-96 mb-4" : "max-h-0 md:max-h-96"
              }`}
            >
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Sliding Windows and Doors
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Openable Windows and Doors
                </a>
              </li>
            </ul>

            {/* By Room Section */}
            <button
              onClick={() => toggleSection("byRoom")}
             className="md:mt-4 w-full md:pointer-events-none md:cursor-default flex items-center justify-between md:border-0 border-b border-[var(--color-green)] pt-1"
            >
              <p className="font-bold text-[var(--color-green)]">By room</p>
              <img src="/assets/downArrow.svg" alt="" 
              className={`md:hidden w-3 h-3 transition-transform mb-4 ${
                  openSections.byRoom ? "rotate-180" : ""
                }`}/>
            </button>

            <ul
              className={`space-y-2 overflow-hidden transition-all duration-300 mt-2 md:mt-0 ${
                openSections.byRoom ? "max-h-96" : "max-h-0 md:max-h-96"
              }`}
            >
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Living room windows and doors
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Bedroom windows and doors
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Balcony windows and doors
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Kitchen windows and doors
                </a>
              </li>
            </ul>
          </div>

          {/* Why Eternia Section */}
          <div>
            <button
              onClick={() => toggleSection("whyEternia")}
              className="w-full md:pointer-events-none md:cursor-default flex items-center justify-between md:border-0 border-b border-[var(--color-green)] pt-1"
            >
              <p className="font-bold text-[var(--color-green)]">Why Eternia</p>
               <img src="/assets/downArrow.svg" alt="" 
              className={`md:hidden w-3 h-3 transition-transform mb-4 ${
                  openSections.whyEternia ? "rotate-180" : ""
                }`}/>
            </button>

            <ul
              className={`space-y-2 overflow-hidden transition-all duration-300 mt-2 md:mt-0 ${
                openSections.whyEternia ? "max-h-96 mb-4" : "max-h-0 md:max-h-96"
              }`}
            >
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Duranium™
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  WiWA©
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Service and support
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>

            {/* Find the right window Section */}
            <button
              onClick={() => toggleSection("findWindow")}
              className="md:mt-4 w-full md:pointer-events-none md:cursor-default flex items-center justify-between md:border-0 border-b border-[var(--color-green)] pt-1"
            >
              <p className="font-bold text-[var(--color-green)]">Find the right window</p>
               <img src="/assets/downArrow.svg" alt="" 
              className={`md:hidden w-3 h-3 transition-transform mb-4 ${
                  openSections.findWindow ? "rotate-180" : ""
                }`}/>
            </button>

            <ul
              className={`space-y-2 overflow-hidden transition-all duration-300 mt-2 md:mt-0 ${
                openSections.findWindow ? "max-h-96" : "max-h-0 md:max-h-96"
              }`}
            >
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Find the right window
                </a>
              </li>
            </ul>
          </div>

          {/* Features Section */}
          <div>
            <button
              onClick={() => toggleSection("features")}
              className="w-full md:pointer-events-none md:cursor-default flex items-center justify-between md:border-0 border-b border-[var(--color-green)] pt-1"
            >
              <p className="font-bold text-[var(--color-green)]">Features</p>
              <img src="/assets/downArrow.svg" alt="" 
              className={`md:hidden w-3 h-3 transition-transform mb-4 ${
                  openSections.features ? "rotate-180" : ""
                }`}/>
            </button>

            <ul
              className={`space-y-2 overflow-hidden transition-all duration-300 mt-2 md:mt-0 ${
                openSections.features ? "max-h-96 mb-4" : "max-h-0 md:max-h-96"
              }`}
            >
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Sound Proof
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Energy Efficient
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Waterproof
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Enhanced Security
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Dust and Pollution Proof
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Large Openings
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Storm Resistant
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Low Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support Section */}
          <div>
            <button
              onClick={() => toggleSection("contact")}
              className="w-full md:pointer-events-none md:cursor-default flex items-center justify-between md:border-0 border-b border-[var(--color-green)] pt-1"
            >
              <p className="font-bold text-[var(--color-green)]">Contact & Support</p>
               <img src="/assets/downArrow.svg" alt="" 
              className={`md:hidden w-3 h-3 transition-transform mb-4 ${
                  openSections.contact ? "rotate-180" : ""
                }`}/>
            </button>

            <ul
              className={`space-y-2 overflow-hidden transition-all duration-300 mt-2 md:mt-0 ${
                openSections.contact ? "max-h-96" : "max-h-0 md:max-h-96"
              }`}
            >
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--color-green)] hover:text-[var(--color-green)] transition-colors text-sm">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-green)] text-white py-5 hidden sm:block">
        <div className="container-flex text-xs text-center leading-relaxed">
          <p className="mb-0">
            *Eternia™, Duranium™ and WiWA© are proprietary to Hindalco Industries Limited. Hindalco Industries Limited has a patent filed right for Duranium alloy. 
            Nothing contained here shall be construed as conferring any license or right under a Hindalco trademark, copyright or patent. Images on the website are 
            indicative. The final product may be different from the images displayed
          </p>
        </div>
      </div>
    </footer>
  )
}
