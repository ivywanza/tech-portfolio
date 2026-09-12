export default function Contact() {
  return (
    <div className="py-10 px-10 bg-blue-100" id="contact">
      <div className="text-center space-y-5">
        <h2 className="text-3xl font-bold"> GET IN TOUCH</h2>
        <p className="mt-2 tex dark:text-gray-400 text-2xl font-serif">
          Have a project in mind or just want to say hi? Send me a message.
        </p>
      </div>
      <form className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-bold text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-bold text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-bold text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="What's on your mind?"
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
