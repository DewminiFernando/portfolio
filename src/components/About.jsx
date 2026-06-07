export default function About() {
  const tags = ['ML Pipelines', 'REST APIs', 'Dean’s List'];

  return (
    <section id="about" className="bg-cream px-6 py-16 md:py-20 text-text-dark">
      <div className="max-w-6xl mx-auto">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
          {/* Left Column: Section Header */}
          <div className="col-span-1 md:col-span-4 text-left pb-2">
            <h2 className="section-heading">About Me</h2>
          </div>

          {/* Right Column: Bio & Small Tags */}
          <div className="col-span-1 md:col-span-8 space-y-6 text-left">
            <p className="text-base sm:text-lg text-text-dark/95 leading-relaxed font-bold">
              I’m a third year B.Sc. (Hons) Information Technology undergraduate at SLIIT,
              specializing in Artificial Intelligence, with a strong interest in machine
              learning, full stack development, and building digital products that are
              genuinely useful.
            </p>

            <p className="text-base sm:text-lg text-text-dark/95 leading-relaxed font-bold">
              I enjoy working across the full stack from designing Python based machine
              learning pipelines and building REST APIs to creating clean React interfaces
              that make complex systems easier to use. Academically, I currently hold a
              3.71 GPA with two consecutive Dean’s List recognitions.
            </p>

            <p className="text-base sm:text-lg text-text-dark/95 leading-relaxed font-bold">
              Beyond coursework, I’ve applied my skills through hands on projects including
              AI powered recommendation systems, full stack web applications, and deployed
              production ready apps. I’m currently seeking an internship where I can
              contribute to a real product team, learn from experienced engineers, and
              continue growing in applied AI, data driven systems, and full stack
              development.
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-sage-soft text-text-dark border border-sage-dark/20 text-xs font-Sbold rounded-full shadow-xs hover:bg-sage-light hover:-translate-y-0.5 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

