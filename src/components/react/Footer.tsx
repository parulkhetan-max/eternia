import React from "react"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-flex py-16 border-b border-gray-200">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img src="src/assets/logo-dark.png" alt="Eternia" className="h-12" />
            <img src="src/assets/image 119.jpg" alt="Aditya Birla" className="h-12" />
          </div>

          <p className="text-gray-700 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            Eternia is the latest product offering from Hindalco (Aditya Birla Group): India's first WiWA© tested and certified windows made with a specially invented Duranium™ alloy
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[var(--color-green)] hover:bg-gray-50 transition-colors"
              aria-label="LinkedIn"
            >
              <img src="src/assets/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[var(--color-green)] hover:bg-gray-50 transition-colors"
              aria-label="Facebook"
            >
              <img src="src/assets/shape.svg" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[var(--color-green)] hover:bg-gray-50 transition-colors"
              aria-label="Instagram"
            >
              <img src="src/assets/instagram.svg" alt="Instagram" className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[var(--color-green)] hover:bg-gray-50 transition-colors"
              aria-label="YouTube"
            >
              <img src="src/assets/bxl-youtube.svg" alt="YouTube" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="font-bold text-gray-900 mb-4">Products</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  By range
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Eternia Duraslim Edge
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Eternia Duraslim
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Eternia Essentials
                </a>
              </li>
            </ul>

            <p className="font-bold text-gray-900 mt-6 mb-4">By type</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Sliding Windows and Doors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Openable Windows and Doors
                </a>
              </li>
            </ul>

            <p className="font-bold text-gray-900 mt-6 mb-4">By room</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Living room windows and doors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Bedroom windows and doors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Balcony windows and doors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Kitchen windows and doors
                </a>
              </li>
            </ul>
          </div>

          {/* Why Eternia */}
          <div>
            <p className="font-bold text-gray-900 mb-4">Why Eternia</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Duranium™
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  WiWA©
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Service and support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>

            <p className="font-bold text-gray-900 mt-6 mb-4">Find the right window</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Find the right window
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-900 mb-4">Features</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Sound Proof
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Energy Efficient
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Waterproof
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Enhanced Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Dust and Pollution Proof
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Large Openings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Storm Resistant
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Low Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-gray-900 mb-4">Contact & Support</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[var(--color-green)] transition-colors text-sm">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-green)] text-white py-6 px-4">
        <div className="container-flex text-xs text-center leading-relaxed">
          <p>
            *Eternia™, Duranium™ and WiWA© are proprietary to Hindalco Industries Limited. Hindalco Industries Limited has a patent filed right for Duranium alloy. 
            Nothing contained here shall be construed as conferring any license or right under a Hindalco trademark, copyright or patent. Images on the website are 
            indicative. The final product may be different from the images displayed
          </p>
        </div>
      </div>
    </footer>
  )
}
