export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        Ivy
      </span>
      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
        <li><a href="#home" className="hover:text-purple-600">Home</a></li>
        <li><a href="#about" className="hover:text-purple-600">About</a></li>
        <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
      </ul>
    </nav>
  )
}