import { FiAward } from 'react-icons/fi';

const wins = [
  {
    id: 1,
    title: "Dean's List Recognition",
    issuer: "SLIIT",
    date: "Year 1 Semester 2 · 2025",
    description: "Recognized for strong academic performance with a 3.825 GPA ",
    certificateLink: "#"
  },
  {
    id: 2,
    title: "Dean's List Recognition",
    issuer: "SLIIT",
    date: "Year 2 Semester 1 · 2025",
    description: "Recognized for consistent academic excellence with a 3.75 GPA ",
    certificateLink: "#"
  }
];

export default function LittleWins() {
  return (
    <section id="little-wins" className="bg-cream px-6 py-16 md:py-20 text-text-dark">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-left mb-10 md:mb-12">
          <h2 className="section-heading">Little Wins</h2>
        </div>

        {/* Intro line */}
        <p className="text-base md:text-lg text-text-muted leading-[1.8] mb-10 whitespace-normal sm:whitespace-nowrap max-w-none">
          Certificates and recognitions picked up along the way.
        </p>

        {/* Certificate Cards Grid */}
        <div className="max-w-[680px] grid grid-cols-1 sm:grid-cols-2 gap-5">
          {wins.map((win) => (
            <div
              key={win.id}
              className="w-full max-w-[320px] min-h-[190px] p-5 md:p-6 flex flex-col"
              style={{
                borderRadius: '14px',
                border: '1.5px solid rgba(127, 156, 132, 0.22)',
                background: 'var(--sage-soft)',
                boxShadow: '0 8px 30px rgba(127, 156, 132, 0.06)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(127, 156, 132, 0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(127, 156, 132, 0.06)';
              }}
            >
              {/* Soft Square Icon */}
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(127, 156, 132, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--sage-dark)',
                marginBottom: '0.75rem',
              }}>
                <FiAward size={18} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-dark mb-1 leading-tight">
                {win.title}
              </h3>

              {/* Issuer & Date */}
              <div className="text-xs font-bold text-sage-dark/85 mb-3">
                {win.issuer} &middot; {win.date}
              </div>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {win.description}
              </p>

              {/* Link */}
              {win.certificateLink === "#" ? (
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-sage-dark/60 cursor-default select-none">
                  Certificate Coming Soon ↗
                </span>
              ) : (
                <a
                  href={win.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-sage-dark hover:underline"
                >
                  View Certificate ↗
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



