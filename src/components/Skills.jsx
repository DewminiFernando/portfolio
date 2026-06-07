import { skills } from '../data/skills';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBrain,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaServer,
  FaJava,
  FaDatabase,
  FaFilter,
  FaTree,
  FaCogs,
  FaUsers
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiFastapi,
  SiSpringboot,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiJsonwebtokens,
  SiPostman,
  SiJupyter
} from 'react-icons/si';

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  SiTailwindcss,
  FaNodeJs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  FaPython,
  FaBrain,
  FaGitAlt,
  FaGithub,
  SiVercel,
  FaFigma,
  FaServer,
  FaJava,
  FaDatabase,
  FaFilter,
  FaTree,
  FaCogs,
  FaUsers,
  SiFastapi,
  SiSpringboot,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiJsonwebtokens,
  SiPostman,
  SiJupyter
};

// Split skills into 4 rows dynamically
const itemsPerRow = Math.ceil(skills.length / 4);
const row1 = skills.slice(0, itemsPerRow);
const row2 = skills.slice(itemsPerRow, itemsPerRow * 2);
const row3 = skills.slice(itemsPerRow * 2, itemsPerRow * 3);
const row4 = skills.slice(itemsPerRow * 3);

function SkillChip({ skill }) {
  const Icon = iconMap[skill.icon];
  return (
    <div className="flex items-center gap-3 bg-cream hover:bg-white-soft border-2 border-sage-dark/15 hover:border-sage-dark/40 px-5 py-3 rounded-full hover:scale-105 transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap">
      {Icon && (
        <Icon
          className="text-xl shrink-0"
          style={{ color: skill.color }}
        />
      )}
      <span className="font-bold text-text-dark text-sm sm:text-base">
        {skill.name}
      </span>
      <span className="text-[10px] uppercase font-extrabold tracking-wider bg-sage-light text-sage-dark px-2.5 py-0.5 rounded-full border border-sage-dark/10">
        {skill.level}
      </span>
    </div>
  );
}

function MarqueeRow({ row, reverse = false }) {
  // Triple the row for seamless looping
  const tripled = [...row, ...row, ...row, ...row, ...row, ...row];
  return (
    <div className="relative w-full overflow-hidden py-2 select-none">
      {/* Left and Right Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>
      {/* Ticker Row */}
      <div className={`${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} gap-4 flex items-center px-4`}>
        {tripled.map((skill, index) => (
          <SkillChip key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-cream py-16 md:py-20 text-text-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-12 md:mb-16">
          <h2 className="section-heading">Skills</h2>
        </div>

        {/* 4-Row Marquee Ticker */}
        <div className="space-y-3 overflow-hidden rounded-2xl">
          <MarqueeRow row={row1} reverse={false} />
          <MarqueeRow row={row2} reverse={true} />
          <MarqueeRow row={row3} reverse={false} />
          <MarqueeRow row={row4} reverse={true} />
        </div>
      </div>
    </section>
  );
}
