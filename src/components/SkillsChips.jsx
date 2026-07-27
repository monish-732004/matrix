import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const SKILLS = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "React",
  "Flutter",
  "AI/ML",
  "UI Design",
  "Canva",
  "Git",
  "Leadership",
  "Public Speaking",
  "Video Editing",
  "Figma",
  "Marketing",
  "Content Writing",
];

export default function SkillsChips({ selected, onToggle }) {
  return (
    <section className="relative w-full px-4 py-24">
      <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-matrix-green text-glow-green sm:text-4xl">
          Skills
        </h2>
        <p className="mt-3 font-terminal text-sm text-matrix-gray">
          Tag your capabilities in the system.
        </p>
      </FadeIn>

      <FadeIn className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
        {SKILLS.map((skill) => {
          const isSelected = selected.includes(skill);
          return (
            <motion.button
              key={skill}
              type="button"
              onClick={() => onToggle(skill)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full border px-5 py-2 font-terminal text-sm tracking-wide transition-all duration-200 ${
                isSelected
                  ? "border-matrix-green bg-matrix-green text-black text-glow-green shadow-[0_0_18px_rgba(0,255,65,0.6)]"
                  : "border-white/15 bg-white/[0.03] text-matrix-gray hover:border-matrix-green/60 hover:text-matrix-green"
              }`}
            >
              {skill}
            </motion.button>
          );
        })}
      </FadeIn>
    </section>
  );
}
