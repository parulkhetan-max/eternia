import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  return (
    <>
    <div className="flex items-center justify-between gap-4">
      <img src="/src/assets/aditya-birla.svg" alt="Logo" />
   
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-white hover:bg-white/10 rounded-lg transition-transform duration-300"
        aria-label="Toggle menu"
      >
        <img src="/src/assets/hamburger.svg" alt="Menu" />
      </button>
 </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white z-50 shadow-2xl transition-transform duration-600 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-end px-6 mt-4">
          <h2 className="hidden">Menu</h2>
          <button
            onClick={closeMenu}
            className="transition"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <nav className="flex flex-col px-4 gap-4 pb-6">
          {/* Products with Submenu */}
          <div>
            <button
              onClick={() => toggleSubmenu('products')}
              className="w-full text-left text-[var(--color-green)] transition flex items-center gap-3"
            >
              Products
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 mt-1 ${openSubmenu === 'products' ? 'rotate-180' : ''}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.42259 0.244078C1.09715 -0.0813592 0.569515 -0.0813592 0.244078 0.244078C-0.0813592 0.569515 -0.0813592 1.09715 0.244078 1.42259L5.24408 6.42259C5.56951 6.74803 6.09715 6.74803 6.42259 6.42259L11.4226 1.42259C11.748 1.09715 11.748 0.569515 11.4226 0.244078C11.0972 -0.0813592 10.5695 -0.0813592 10.2441 0.244078L5.83333 4.65482L1.42259 0.244078Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSubmenu === 'products'
                  ? 'max-h-40 '
                  : 'max-h-0'
              }`}
            >
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href="/"
                  className="text-[var(--color-green)] transition text-sm"
                  onClick={closeMenu}
                >
                  Aluminium Windows
                </a>
              </div>
            </div>
          </div>

          {/* Why Eternia with Submenu */}
          <div>
            <button
              onClick={() => toggleSubmenu('why')}
              className="w-full text-left text-[var(--color-green)] transition flex items-center gap-3"
            >
              Why Eternia
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 mt-1 ${openSubmenu === 'why' ? 'rotate-180' : ''}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.42259 0.244078C1.09715 -0.0813592 0.569515 -0.0813592 0.244078 0.244078C-0.0813592 0.569515 -0.0813592 1.09715 0.244078 1.42259L5.24408 6.42259C5.56951 6.74803 6.09715 6.74803 6.42259 6.42259L11.4226 1.42259C11.748 1.09715 11.748 0.569515 11.4226 0.244078C11.0972 -0.0813592 10.5695 -0.0813592 10.2441 0.244078L5.83333 4.65482L1.42259 0.244078Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSubmenu === 'why'
                  ? 'max-h-40 '
                  : 'max-h-0'
              }`}
            >
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href="/"
                  className="text-[var(--color-green)] transition text-sm"
                  onClick={closeMenu}
                >
                 Our Story
                </a>
              </div>
            </div>
          </div>
         

          {/* Regular Links */}
          <a
            href="/"
            className="text-[var(--color-green)] transition"
            onClick={closeMenu}
          >
            Services & Supports
          </a>
          <a
            href="/"
            className="text-[var(--color-green)] transition"
            onClick={closeMenu}
          >
            News and Events
          </a>
          <a
            href="/"
            className="text-[var(--color-green)] transition"
            onClick={closeMenu}
          >
            Help
          </a>
        </nav>
      </div>
    </>
  );
}