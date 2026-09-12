import { useState } from "react"

export default function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `mailto:ivymaundu03@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="py-10 px-4 sm:px-6 md:px-10 bg-blue-100" id="contact">
      <div className="text-center space-y-4 sm:space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold">GET IN TOUCH</h2>
        <p className="mt-2 dark:text-gray-400 text-lg sm:text-2xl font-serif">
          Have a project in mind or just want to say hi? Send me a message.
        </p>
      </div>

      <form className="mt-10 flex flex-col gap-5 max-w-xl mx-auto" onSubmit={handleSubmit}>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="What's on your mind?"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full sm:w-auto bg-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}