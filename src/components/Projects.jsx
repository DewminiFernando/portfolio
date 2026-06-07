import { useState, useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

/* ──────────────────────────────────────────────
   Mockup Previews (fallbacks when video is missing)
   ────────────────────────────────────────────── */

function BookshelfMockup() {
  return (
    <div className="w-full h-full bg-[#FAF8F5] p-3 flex flex-col justify-between text-text-dark select-none text-[10px]">
      {/* Profile Card & Goal */}
      <div className="flex gap-2 items-center justify-between bg-white border border-sage-dark/10 p-2 rounded-xl shadow-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-sage-light flex items-center justify-center font-extrabold text-[9px] text-sage-dark">
            DF
          </div>
          <div>
            <p className="font-bold text-[8px] leading-tight">Dewmi's Bookshelf</p>
            <p className="text-[7px] text-text-muted">3 books reading</p>
          </div>
        </div>
        <div className="text-right">
          <span className="bg-sage-main/30 text-sage-dark text-[7px] px-1.5 py-0.5 rounded-full border border-sage-dark/10 font-bold">
            Goal: 12/20
          </span>
        </div>
      </div>

      {/* Bookshelf row */}
      <div className="my-2 bg-[#EADCC9] p-1.5 rounded-lg border border-[#D5C2AA] relative">
        <div className="flex gap-1.5 items-end justify-center h-14">
          <div className="w-3.5 h-12 bg-rose-300 rounded-xs flex items-center justify-center border-l-2 border-rose-400 transform -rotate-6 origin-bottom shadow-xs">
            <span className="text-[6px] text-rose-800 font-extrabold transform rotate-90 whitespace-nowrap">AI Era</span>
          </div>
          <div className="w-4 h-14 bg-emerald-300 rounded-xs flex items-center justify-center border-l-2 border-emerald-400 shadow-xs">
            <span className="text-[6px] text-emerald-800 font-extrabold transform rotate-90 whitespace-nowrap">React Docs</span>
          </div>
          <div className="w-3.5 h-11 bg-amber-300 rounded-xs flex items-center justify-center border-l-2 border-amber-400 transform rotate-3 origin-bottom shadow-xs">
            <span className="text-[6px] text-amber-800 font-extrabold transform rotate-90 whitespace-nowrap">Cozy CSS</span>
          </div>
          <div className="w-4 h-13 bg-sky-300 rounded-xs flex items-center justify-center border-l-2 border-sky-400 shadow-xs">
            <span className="text-[6px] text-sky-800 font-extrabold transform rotate-90 whitespace-nowrap">Logic</span>
          </div>
        </div>
        <div className="h-2 w-full bg-[#C2A888] rounded-b-md border-t border-[#AD9170] shadow-xs"></div>
      </div>

      {/* Mini Analytics */}
      <div className="bg-white border border-sage-dark/10 p-2 rounded-xl shadow-xs flex justify-between items-center">
        <div className="flex flex-col gap-0.5">
          <span className="font-bold text-[7px] text-text-muted">Reading Time</span>
          <span className="font-extrabold text-[9px] text-text-dark flex items-center gap-0.5">📖 4.2h / week</span>
        </div>
        <div className="flex items-end gap-1 h-6">
          <div className="w-1.5 h-2 bg-sage-light rounded-t-xs"></div>
          <div className="w-1.5 h-4 bg-sage-light rounded-t-xs"></div>
          <div className="w-1.5 h-6 bg-sage-dark rounded-t-xs"></div>
          <div className="w-1.5 h-3 bg-sage-main rounded-t-xs"></div>
        </div>
      </div>
    </div>
  );
}

function TravelMockup() {
  return (
    <div className="w-full h-full bg-[#FAF8F5] p-3 flex flex-col justify-between text-text-dark select-none text-[10px]">
      {/* Trip Card & Budget */}
      <div className="flex gap-2">
        <div className="flex-1 bg-white border border-sage-dark/10 p-2 rounded-xl shadow-xs flex flex-col justify-between">
          <div>
            <span className="bg-amber-100 text-amber-800 text-[6px] px-1.5 py-0.5 rounded-full font-bold">Trip to Paris</span>
            <p className="font-extrabold text-[8px] mt-1 text-text-dark">Hotel Relais</p>
          </div>
          <div className="h-1.5 w-12 bg-sage-light rounded-xs mt-1"></div>
        </div>
        <div className="w-16 bg-sage-light/40 border border-sage-dark/10 p-2 rounded-xl shadow-xs flex flex-col justify-between items-center text-center">
          <span className="text-[6px] text-text-muted font-bold">Budget</span>
          <div className="w-8 h-8 rounded-full border-4 border-sage-dark border-t-sage-light flex items-center justify-center font-extrabold text-[7px] text-sage-dark mt-0.5">
            75%
          </div>
        </div>
      </div>

      {/* Map Panel & Itinerary */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="bg-sky-100 border border-sky-200 rounded-xl p-1 relative overflow-hidden flex items-center justify-center h-16">
          <div className="absolute w-full h-0.5 border-t border-dashed border-sky-300 top-1/2 left-0 transform -rotate-12"></div>
          <div className="absolute h-full w-0.5 border-l border-dashed border-sky-300 left-1/3 top-0 transform rotate-12"></div>
          <div className="z-10 text-xs">📍</div>
          <div className="absolute bottom-1 right-1 bg-white/80 text-[6px] px-1 rounded-xs font-bold">GPS Lock</div>
        </div>
        <div className="bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs flex flex-col gap-1 justify-center">
          <div className="flex items-center gap-1">
            <span className="text-sage-dark text-[7px]">✅</span>
            <span className="text-[7px] font-bold line-through text-text-muted">Book Flight</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sage-dark text-[7px]">✅</span>
            <span className="text-[7px] font-bold">Pack Luggage</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-xs border border-sage-dark/30"></div>
            <span className="text-[7px] font-bold text-text-dark">Explore Cafes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudyMockup() {
  return (
    <div className="w-full h-full bg-[#FAF8F5] p-3 flex flex-col justify-between text-text-dark select-none text-[10px]">
      {/* PDF Upload Card */}
      <div className="bg-white border border-sage-dark/10 p-2 rounded-xl shadow-xs flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center text-red-500 text-[10px] font-extrabold shrink-0">
          PDF
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[8px] truncate">Lecture_Notes_W12.pdf</p>
          <p className="text-[6px] text-text-muted">Uploaded • 2.4 MB</p>
        </div>
        <span className="bg-emerald-100 text-emerald-700 text-[6px] px-1.5 py-0.5 rounded-full font-bold shrink-0">Processed</span>
      </div>

      {/* Study Guide & Question Bank */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs">
          <span className="text-[6px] text-text-muted font-bold">Study Guide</span>
          <div className="mt-1 space-y-1">
            <div className="h-1 w-full bg-sage-light rounded-xs"></div>
            <div className="h-1 w-4/5 bg-sage-light rounded-xs"></div>
            <div className="h-1 w-3/5 bg-sage-main/40 rounded-xs"></div>
          </div>
        </div>
        <div className="bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs">
          <span className="text-[6px] text-text-muted font-bold">Question Bank</span>
          <div className="mt-1 space-y-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-sage-dark"></div>
              <div className="h-1 flex-1 bg-sage-light rounded-xs"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
              <div className="h-1 flex-1 bg-sage-light rounded-xs"></div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-sage-dark"></div>
              <div className="h-1 flex-1 bg-sage-light rounded-xs"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Chart & Weak Topics */}
      <div className="flex gap-2 mt-2">
        <div className="flex-1 bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs">
          <span className="text-[6px] text-text-muted font-bold">Quiz Progress</span>
          <div className="flex items-end gap-1 h-7 mt-1">
            <div className="w-2 h-3 bg-sage-light rounded-t-xs"></div>
            <div className="w-2 h-5 bg-sage-main rounded-t-xs"></div>
            <div className="w-2 h-4 bg-sage-dark rounded-t-xs"></div>
            <div className="w-2 h-7 bg-emerald-400 rounded-t-xs"></div>
            <div className="w-2 h-6 bg-sage-dark rounded-t-xs"></div>
          </div>
        </div>
        <div className="w-20 bg-amber-50 border border-amber-200/60 p-1.5 rounded-xl shadow-xs flex flex-col justify-center">
          <span className="text-[6px] text-amber-700 font-bold">Weak Topics</span>
          <div className="mt-1 space-y-0.5">
            <span className="block bg-amber-200/60 text-amber-800 text-[5px] px-1 py-0.5 rounded-full font-bold truncate">Sorting Algo</span>
            <span className="block bg-amber-200/60 text-amber-800 text-[5px] px-1 py-0.5 rounded-full font-bold truncate">Graph Theory</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformMockup() {
  return (
    <div className="w-full h-full bg-[#FAF8F5] p-3 flex flex-col justify-between text-text-dark select-none text-[10px]">
      {/* Destination Cards Row */}
      <div className="flex gap-1.5">
        <div className="flex-1 bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs">
          <div className="w-full h-5 bg-sky-100 rounded-md mb-1"></div>
          <p className="font-extrabold text-[7px]">Bali</p>
          <p className="text-[5px] text-text-muted">4 days · $850</p>
        </div>
        <div className="flex-1 bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs">
          <div className="w-full h-5 bg-amber-100 rounded-md mb-1"></div>
          <p className="font-extrabold text-[7px]">Tokyo</p>
          <p className="text-[5px] text-text-muted">7 days · $1200</p>
        </div>
        <div className="flex-1 bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs">
          <div className="w-full h-5 bg-rose-100 rounded-md mb-1"></div>
          <p className="font-extrabold text-[7px]">Paris</p>
          <p className="text-[5px] text-text-muted">5 days · $980</p>
        </div>
      </div>

      {/* Hotel Recommendation & Expense Summary */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs">
          <span className="text-[6px] text-text-muted font-bold">Hotel Pick</span>
          <p className="font-extrabold text-[8px] mt-0.5">Grand Resort Bali</p>
          <div className="flex items-center gap-0.5 mt-0.5">
            <span className="text-[6px] text-amber-500">★★★★</span>
            <span className="text-[5px] text-text-muted">4.6</span>
          </div>
          <div className="h-1 w-full bg-sage-light rounded-xs mt-1"></div>
        </div>
        <div className="bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs">
          <span className="text-[6px] text-text-muted font-bold">Expenses</span>
          <div className="mt-1 space-y-1">
            <div className="flex justify-between text-[5px] font-bold">
              <span>Flights</span>
              <span>$420</span>
            </div>
            <div className="w-full h-1 bg-sage-light rounded-full overflow-hidden">
              <div className="h-full bg-sage-dark" style={{ width: '55%' }}></div>
            </div>
            <div className="flex justify-between text-[5px] font-bold">
              <span>Hotels</span>
              <span>$310</span>
            </div>
            <div className="w-full h-1 bg-sage-light rounded-full overflow-hidden">
              <div className="h-full bg-sage-main" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Route/Trip Planning */}
      <div className="bg-white border border-sage-dark/10 p-1.5 rounded-xl shadow-xs mt-2 flex items-center gap-2">
        <div className="flex items-center gap-1 flex-1">
          <div className="w-4 h-4 rounded-full bg-sage-light flex items-center justify-center text-[6px] font-extrabold text-sage-dark">1</div>
          <div className="h-0.5 flex-1 bg-sage-main/40 rounded-full"></div>
          <div className="w-4 h-4 rounded-full bg-sage-main flex items-center justify-center text-[6px] font-extrabold text-white">2</div>
          <div className="h-0.5 flex-1 bg-sage-main/40 rounded-full"></div>
          <div className="w-4 h-4 rounded-full bg-sage-light flex items-center justify-center text-[6px] font-extrabold text-sage-dark">3</div>
        </div>
        <span className="text-[6px] font-bold text-text-muted shrink-0">3 stops</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Project Preview Router (selects mockup by type)
   ────────────────────────────────────────────── */

function ProjectMockup({ type }) {
  switch (type) {
    case 'bookshelf':
      return <BookshelfMockup />;
    case 'travel':
      return <TravelMockup />;
    case 'study':
      return <StudyMockup />;
    case 'platform':
      return <PlatformMockup />;
    default:
      return (
        <div className="w-full h-full bg-sage-light/30 flex items-center justify-center text-text-muted text-sm select-none">
          Preview
        </div>
      );
  }
}

/* ──────────────────────────────────────────────
   VideoPreview — plays MP4 with mockup fallback
   ────────────────────────────────────────────── */

function VideoPreview({ project }) {
  const [videoError, setVideoError] = useState(false);
  const [posterError, setPosterError] = useState(false);

  if (project.video && !videoError) {
    return (
      <video
        src={project.video}
        poster={project.poster || undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setVideoError(true)}
        className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
      />
    );
  }

  if (project.poster && !posterError) {
    return (
      <img
        src={project.poster}
        alt={`${project.title} preview`}
        onError={() => setPosterError(true)}
        className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
      />
    );
  }

  return <ProjectMockup type={project.previewType} />;
}

/* ──────────────────────────────────────────────
   useInView hook — triggers once when element enters viewport
   ────────────────────────────────────────────── */

function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

/* ──────────────────────────────────────────────
   Projects Section
   ────────────────────────────────────────────── */

export default function Projects() {
  const [sectionRef, sectionVisible] = useInView();

  return (
    <section id="projects" className="bg-cream px-6 py-16 md:py-20 text-text-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-12 md:mb-16">
          <h2 className="section-heading">Projects</h2>
        </div>

        {/* Projects Stack */}
        <div ref={sectionRef} className="space-y-10 md:space-y-14">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              style={{
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s`,
              }}
            >
              <div
                className="bg-sage-soft border border-border-soft rounded-[28px] soft-shadow
                  transition-all duration-300 ease-out
                  hover:-translate-y-1.5 hover:border-[#C9D8CA] hover:shadow-xl
                  grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-6"
              >
                {/* Left Column: Browser Mockup Preview */}
                <div className="self-start relative flex flex-col bg-white-soft border border-sage-dark/15 rounded-2xl overflow-hidden shadow-xs transition-all duration-300 group-hover:brightness-[1.03] w-full">
                  {/* Browser Top Bar */}
                  <div className="bg-sage-light/50 px-4 py-2 border-b border-sage-dark/10 flex items-center justify-between shrink-0">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                    </div>
                    {/* Fake URL Bar */}
                    <div className="bg-white/70 border border-sage-dark/10 rounded-md text-[8px] text-text-muted px-4 py-0.5 w-1/2 text-center truncate select-none">
                      {project.title.toLowerCase().replace(/\s+/g, '')}.dev
                    </div>
                    <div className="w-10"></div>
                  </div>

                  {/* Preview Canvas */}
                  <div className="preview-content h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden bg-[#F8F5EE]">
                    <VideoPreview project={project} />
                  </div>
                </div>

                {/* Right Column: Project Details */}
                <div className="flex h-full flex-col justify-between">
                  {/* Top Content */}
                  <div className="space-y-3">
                    {/* Title & Status */}
                    <div className="flex items-center justify-between gap-4 w-full">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-dark group-hover:text-sage-dark transition-colors duration-200">
                        {project.title}
                      </h3>

                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border shrink-0 ${project.status === "Completed"
                          ? "bg-[#E6EFE7] text-[#2F3A32] border-[#7F9C84]/30"
                          : "bg-[#F8F5EE] text-[#5A6B5E] border-[#7F9C84]/20"
                          }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-text-muted font-bold leading-relaxed mt-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Content: Tech Stack + Links */}
                  <div className="mt-auto pt-6">
                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-white-soft border border-sage-dark/12 rounded-full text-[10px] font-bold text-text-dark shadow-xs transition-transform duration-200 hover:scale-105"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 mt-6">
                      {(() => {
                        const isLiveDisabled =
                          !project.live || project.live === "#" || project.live.trim() === "";
                        const isGithubDisabled =
                          !project.github ||
                          project.github === "#" ||
                          project.github.trim() === "";

                        return (
                          <>
                            <a
                              href={isLiveDisabled ? undefined : project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-disabled={isLiveDisabled ? "true" : undefined}
                              className={`h-10 w-10 flex items-center justify-center rounded-full border bg-sage-main text-text-dark border-sage-dark/20 transition-all duration-200 ${isLiveDisabled
                                ? "opacity-50 cursor-not-allowed"
                                : "shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:bg-text-dark hover:text-cream cursor-pointer"
                                }`}
                              onClick={(e) => {
                                if (isLiveDisabled) e.preventDefault();
                              }}
                            >
                              <FiExternalLink size={16} />
                            </a>

                            <a
                              href={isGithubDisabled ? undefined : project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-disabled={isGithubDisabled ? "true" : undefined}
                              className={`h-10 w-10 flex items-center justify-center rounded-full border bg-white-soft text-text-dark border-sage-dark/20 transition-all duration-200 ${isGithubDisabled
                                ? "opacity-50 cursor-not-allowed"
                                : "shadow-xs hover:shadow-md hover:-translate-y-0.5 hover:bg-sage-light hover:border-sage-dark/35 cursor-pointer"
                                }`}
                              onClick={(e) => {
                                if (isGithubDisabled) e.preventDefault();
                              }}
                            >
                              <FaGithub size={18} />
                            </a>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
