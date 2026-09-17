import { useState } from 'react'
import myLogo from '/mylogo.webp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="relative px-6 sm:px-8 py-4 sm:py-6 max-w-6xl mx-auto font-bold">
      <div className="flex items-center justify-between">
        <span className="font-bold text-pink-500 dark:text-white">
          <img
            src={myLogo}
            alt="Ivy"
            className="h-14 sm:h-20 w-auto object-contain"
          />
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-2xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-purple-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-lg pb-4 border-b border-gray-200 dark:border-gray-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}