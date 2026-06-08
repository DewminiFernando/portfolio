import { FaEnvelope, FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      href: 'mailto:fdewminix@gmail.com',
      icon: <FaEnvelope className="text-sage-dark text-lg" />,
      external: false
    },
    {
      label: 'GitHub',
      href: 'https://github.com/DewminiFernando',
      icon: <FaGithub className="text-sage-dark text-lg" />,
      external: true
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dewmi-fernando-488a45401/',
      icon: <FaLinkedinIn className="text-sage-dark text-lg" />,
      external: true
    }
  ];

  return (
    <section id="contact" className="bg-cream px-6 py-16 md:py-20 text-text-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12 md:mb-16">
          <h2 className="section-heading">Contact</h2>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Side: Intro + Icon Links */}
          <div className="flex flex-col text-left space-y-8">
            <div className="space-y-3">
              <p className="text-lg font-bold leading-relaxed text-text-dark/95">
                I'm open to internships, collaborations, and project opportunities. Feel free to reach out.
              </p>
            </div>

            {/* Contact Icon Links */}
            <div className="flex items-center gap-4 flex-wrap">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 rounded-2xl bg-white-soft border border-sage-dark/15 flex items-center justify-center text-sage-dark shadow-xs hover:-translate-y-1 hover:bg-sage-light hover:border-sage-dark/35 transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: CTA Block */}
          <div className="flex flex-col justify-start">
            <div className="bg-white-soft border border-sage-dark/20 rounded-[28px] p-8 sm:p-10 soft-shadow text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-text-dark leading-snug">
                  Ready to Build Something Together?
                </h3>
                <p className="text-base text-text-dark/80 leading-relaxed font-bold">
                  I'm actively seeking opportunities in AI/ML and full-stack development. If you're looking for someone who can contribute across the stack from day one, let's talk.
                </p>
              </div>

              <a
                href="mailto:fdewminix@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage-main text-text-dark hover:bg-sage-dark hover:text-white-soft rounded-full text-base font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border border-sage-dark/20"
              >
                <span>Get in Touch</span>
                <FaArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
