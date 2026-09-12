export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-6 px-4 sm:px-6 md:px-10 py-10 max-w-6xl mx-auto text-center md:text-left">

      <div className="flex flex-col gap-3 md:gap-2 items-center md:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Welcome To My Personal Portfolio Website
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl">Ivy Maundu</h2>
        <p className="text-sm sm:text-base">
          Economics & Statistics | Software Development | Business Analyst
        </p>
        <button className="mt-2 bg-orange-600 w-full sm:w-auto px-8 py-3 text-lg sm:text-xl md:text-2xl text-white font-semibold font-serif rounded-2xl" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }>
          View Recent Projects
        </button>
      </div>

      <div className="shrink-0">
        <img
          src="/src/assets/hero.jpg"
          alt="Reliable quality of output"
          className="w-56 sm:w-72 md:w-96 rounded-2xl object-cover"
        />
      </div>

    </div>
  )
}