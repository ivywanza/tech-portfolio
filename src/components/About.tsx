export default function About() {
  return (
    <div className="p-10 bg-blue-100" id="about">
      <h2 className="font-bold text-6l py-10 text-2xl">ABOUT ME ...</h2>
    <div className="space-y-5">
      <p>
        I’m Ivy Maundu, an Economics & Statistics graduate with a growing
        background in software development and business analysis.
      </p>
      <p>
        I’m interested in understanding how businesses work, identifying
        problems through data, and using technology to create practical
        solutions. My background in economics and statistics has strengthened my
        analytical and problem-solving skills, while my experience in software
        development has taught me how to turn ideas into functional digital
        solutions.
      </p>

      <p>
        I enjoy working at the intersection of data, business, and technology 
        whether that means analyzing information, improving a business process,
        understanding customer needs, or building a solution that makes work
        more efficient.
      </p>
      <p>
        I’m continuously developing my skills in data analysis, software
        development, business analysis, and digital solutions, with the goal of
        solving real-world business problems and creating measurable value.
      </p>
      </div>
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 py-10">
  <button
  className="w-full sm:flex-1 bg-blue-500 px-4 py-3 rounded-3xl text-white text-base sm:text-lg md:text-xl font-bold whitespace-nowrap"
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
>
  View My Projects
</button>
  <a
  href="/Ivy_Maundu_Resume.docx"
  download="Ivy_Maundu_CV.docx"
  className="w-full sm:flex-1 bg-orange-600 px-4 py-3 rounded-3xl text-white text-base sm:text-lg md:text-xl font-bold whitespace-nowrap text-center inline-flex items-center justify-center"
>
  Download CV
</a>
</div>

    </div>
  );
}
