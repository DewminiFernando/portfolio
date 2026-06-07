import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'dewmi@example.dev',
      href: 'mailto:dewmi@example.dev',
      icon: <FaEnvelope className="text-sage-dark text-lg" />
    },
    {
      label: 'GitHub',
      value: 'github.com/dewmi-fernando',
      href: 'https://github.com',
      icon: <FaGithub className="text-sage-dark text-lg" />
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/dewmi-fernando',
      href: 'https://linkedin.com',
      icon: <FaLinkedinIn className="text-sage-dark text-lg" />
    },
    {
      label: 'Location',
      value: 'Sri Lanka 🇱🇰',
      href: '#',
      icon: <FaMapMarkerAlt className="text-sage-dark text-lg" />
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
          {/* Left Side: Intro + Contact Cards */}
          <div className="flex flex-col text-left space-y-8">
            <div className="space-y-3">
              <p className="text-lg font-bold leading-relaxed text-text-dark/95">
                I'm open to internships, collaborations, and project opportunities. Feel free to reach out.
              </p>
              <p className="text-sm text-text-muted font-bold">
                Connect with me via email or social profiles — let's talk ideas, design, or code.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-4 bg-white-soft border border-sage-dark/15 hover:border-sage-dark/35 rounded-2xl soft-shadow-hover flex items-center gap-3 select-none group transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-soft flex items-center justify-center border border-sage-dark/10 group-hover:scale-105 transition-transform duration-200 shadow-xs shrink-0">
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted">
                      {info.label}
                    </p>
                    <p className="text-xs font-bold text-text-dark truncate">
                      {info.value}
                    </p>
                  </div>
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
                  I'm actively seeking internship opportunities in AI/ML and full-stack development. If you're looking for someone who can contribute across the stack from day one, let's talk.
                </p>
              </div>

              <a
                href="mailto:dewmi@example.dev"
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
