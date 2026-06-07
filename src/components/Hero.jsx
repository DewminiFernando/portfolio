import { FaArrowRight, FaDownload } from 'react-icons/fa';
import profileImage from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-sage-soft via-white-soft to-cream px-6 pt-10 pb-16 md:pt-20 md:pb-20 overflow-hidden"
    >
      {/* Background soft decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sage-light/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sage-main/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Left Side Content */}
        <div className="flex flex-col items-start text-left space-y-6 max-w-xl">
          {/* Pill */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-sage-light text-text-dark border border-sage-dark/30 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-sage-dark mr-2 animate-pulse"></span>
            Actively seeking part-time or internship roles · Sri Lanka
          </span>

          {/* Heading and Subtitle */}
          <div className="space-y-3">
            <h1 className="font-bold tracking-tight leading-tight">
              <span className="block whitespace-nowrap text-4xl sm:text-5xl text-sage-dark">Dewmi Fernando</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sage-dark/90">
              I build clean digital experiences.
            </p>
            <p className="text-lg font-bold text-text-muted">
              AI Undergraduate · Machine Learning · Full-Stack Development
            </p>
          </div>

          {/* Paragraph */}
          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-text-dark/90 font-bold italic border-l-4 border-sage-main pl-4">
            “An AI undergraduate at SLIIT, happily blending machine learning, full stack
            development, and clean design to build smart little experiences that feel
            useful, friendly, and human.”
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-sage-main text-text-dark hover:bg-sage-dark hover:text-white-soft rounded-full text-base font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 gap-2 border border-sage-dark/20"
            >
              <span>View Projects</span>
              <FaArrowRight size={14} />
            </a>
            <a
              href="/Dewmi_Fernando_CV.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white-soft text-text-dark hover:bg-sage-light rounded-full text-base font-bold border-2 border-sage-dark/20 hover:border-sage-dark/40 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 gap-2"
            >
              <span>Download CV</span>
              <FaDownload size={14} />
            </a>
          </div>
        </div>

        {/* Right Side Content - Circular Profile Image and Floating Symbols */}
        <div className="flex items-center justify-center relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Circular Profile Image with one clean sage border */}
            <div
              className="w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[260px] md:h-[260px] rounded-full border-4 border-sage-main overflow-hidden soft-shadow animate-float-gentle"
            >
              <img
                src={profileImage}
                alt="Dewmi Fernando"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            {/* Floating Icons */}
            {/* Top Left: ✦ */}
            <div className="absolute top-4 left-6 text-3xl text-sage-dark/70 animate-float-gentle select-none">
              ✦
            </div>
            {/* Top Right: ♡ */}
            <div className="absolute top-8 right-6 text-3xl text-sage-dark/70 animate-float-slow select-none">
              ♡
            </div>
            {/* Bottom Left: 🌿 */}
            <div className="absolute bottom-6 left-8 text-4xl text-sage-dark/80 animate-float-slow select-none">
              🌿
            </div>
            {/* Bottom Right: ★ */}
            <div className="absolute bottom-8 right-8 text-3xl text-sage-dark/70 animate-float-gentle select-none">
              ★
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
