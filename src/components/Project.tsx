export default function Project() {

  const projects = [
  {
    id: 1,
    image: "/src/assets/cbc-timetable-generator.png",
    name: "CBC Timetable Generator",
    description: "A custom-built system for generating class timetables under Kenya's CBC curriculum.",
    url: "https://timetable-generator2.onrender.com"
  },
  {
    id: 2,
    image: "/src/assets/meet-me-here.png",
    name: "SmartMatch Dating Platform",
    description: "An AI-powered dating web application that enables users to connect meaningfully through intelligent matching, real-time chat, and a sleek, user-friendly interface.",
    url:"https://dating-site-p7cx.onrender.com/"
  },
  {
    id: 3,
    name: "Personal Portfolio Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This site — built with React and Tailwind to showcase projects and skills in a clean, responsive layout.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Expense Tracker App",
    description: "A simple budgeting tool that lets users log expenses by category and visualize monthly spending habits.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Market Research Report Automation",
    description: "A script that pulls raw survey data and generates a formatted summary report, cutting manual reporting time significantly.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Task Management Tool",
    description: "A lightweight app for organizing tasks by priority and deadline, built to practice full-stack development fundamentals.",
  },
]

  return (
    <div className="px-10 py-10">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-bold">My Projects</h3>
        <p className="mt-2 tex dark:text-gray-400 text-2xl font-serif">What I've been working on ...</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col overflow-hidden
               before:content-[''] before:absolute before:top-0 before:right-0
               before:border-t-0 before:border-r-[36px] before:border-b-[36px] before:border-l-0
               before:border-solid before:border-transparent
               before:border-r-white dark:before:border-r-gray-900
               before:shadow-[-2px_2px_4px_rgba(0,0,0,0.15)]"
          >
            <img src={project.image} 
            alt={project.name} 
            className="w-full h-48 object-cover"
            />
            <h4 className="text-xl font-bold font-serif text-gray-900 dark:text-white pt-10">
              {project.name}
            </h4>
            <p className="mt-2 text-gray-800 dark:text-gray-400 flex-1">
              {project.description}
            </p>
            <button className="mt-4 self-start px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"  onClick={() => project.url && window.open(project.url, "_blank", "noopener,noreferrer")}
  disabled={!project.url}>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
