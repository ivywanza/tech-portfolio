export default function Hero() {
  return (
    <section className="relative overflow-hidden px-8 py-16 max-w-6xl mx-auto bg-blue-400">
      {/* Giant background name — sits behind everything */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[10rem] md:text-[14rem] font-extrabold text-gray-100 dark:text-gray-800 select-none z-0 whitespace-nowrap">
        IVY
      </h1>

      {/* Foreground content — sits above the background text */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: tagline */}
        <div className="text-left">
          <p className="text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
            I design and build clean, user-focused digital experiences —
            simple, functional, and impactful.
          </p>
        </div>

        {/* Right: portrait image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/src/assets/hero.jpg"
            alt="Portrait of Ivy"
            className="w-72 md:w-96 rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Bottom: name + year, like the reference */}
      <div className="relative z-10 mt-10 flex items-end justify-between">
        <span className="text-sm text-gray-400">©2026</span>
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          IVY
        </h2>
      </div>
    </section>
  )
}