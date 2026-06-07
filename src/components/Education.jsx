import { FiMapPin, FiUser } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="bg-cream px-6 py-16 md:py-20 text-text-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-10 md:mb-12">
          <h2 className="section-heading">Background</h2>
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left Column: Recent Experience */}
          <div className="text-left">
            <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-text-dark mb-8">
              <FiUser size={20} className="text-text-dark shrink-0" />
              <span>Recent Experience</span>
            </h3>

            <p className="text-base md:text-lg text-text-muted leading-[1.8] mt-6">
              Looking for my first internship
            </p>
            <p className="text-sm md:text-base text-text-muted leading-[1.8] mt-2" style={{ opacity: 0.8 }}>
              Currently seeking internship opportunities in AI/ML, full-stack development, or software engineering.
            </p>
          </div>

          {/* Right Column: Education Background — vertical sage timeline */}
          <div className="text-left">
            <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-text-dark mb-8">
              <FiMapPin size={20} className="text-text-dark shrink-0" />
              <span>Education Background</span>
            </h3>

            {/* Timeline wrapper */}
            <div
              style={{
                position: 'relative',
                paddingLeft: '1.5rem',
              }}
            >
              {/* Vertical sage line */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '6px',
                  bottom: '6px',
                  width: '1.5px',
                  background: 'var(--sage-main)',
                  borderRadius: '999px',
                }}
              />

              {/* Timeline items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>

                {/* Item 1 */}
                <div style={{ position: 'relative' }}>
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-1.5rem',
                      top: '6px',
                      width: '11px',
                      height: '11px',
                      borderRadius: '50%',
                      background: 'var(--sage-dark)',
                      border: '2px solid var(--sage-main)',
                      flexShrink: 0,
                    }}
                  />
                  <h4 className="text-base md:text-lg font-bold text-text-dark leading-snug mb-1">
                    BSc (Hons) Information Technology / Artificial Intelligence
                  </h4>
                  <p className="text-sm text-sage-dark font-bold tracking-wide mb-2">
                    SLIIT · 2024 – Present
                  </p>
                  <p className="text-sm md:text-base text-text-muted leading-[1.8]">
                    Achieved Dean's List recognition while pursuing studies in Information Technology and Artificial Intelligence, with a strong focus on artificial intelligence, machine learning, software engineering, and full-stack development.
                  </p>
                </div>

                {/* Item 2 */}
                <div style={{ position: 'relative' }}>
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '-1.5rem',
                      top: '6px',
                      width: '11px',
                      height: '11px',
                      borderRadius: '50%',
                      background: 'var(--sage-dark)',
                      border: '2px solid var(--sage-main)',
                      flexShrink: 0,
                    }}
                  />
                  <h4 className="text-base md:text-lg font-bold text-text-dark leading-snug mb-1">
                    Diploma in Information Technology
                  </h4>
                  <p className="text-sm text-sage-dark font-bold tracking-wide mb-2">
                    IMBS Green Campus · 2022                 </p>
                  <p className="text-sm md:text-base text-text-muted leading-[1.8]">
                    An internationally recognised diploma completed with distinction, covering core programming, software development, and essential IT concepts.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
