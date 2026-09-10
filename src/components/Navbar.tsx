import myLogo from '../assets/mylogo.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto font-bold text-2xl">
      <span className="font-bold text-pink-500 dark:text-white">
        <img 
        src={myLogo}
        alt="Ivy" 
        className="h-20 w-auto object-contain"
        />
      </span>
      <ul className="hidden md:flex gap-8">
        <li><a href="#home" className="hover:text-purple-600">Home</a></li>
        <li><a href="#about" className="hover:text-purple-600">About</a></li>
        <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
      </ul>
    </nav>
  )
}