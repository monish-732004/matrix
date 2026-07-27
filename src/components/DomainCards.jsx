import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const DOMAINS = [
  { id: "ai-ml", title: "AI / ML", subtitle: "Train Intelligence", code: "01" },
  { id: "web", title: "Web Development", subtitle: "Build the Future", code: "02" },
  { id: "app", title: "App Development", subtitle: "Mobile Experiences", code: "03" },
  { id: "corporate", title: "Corporate", subtitle: "Build Partnerships", code: "04" },
  { id: "creatives", title: "Creatives", subtitle: "Design Experiences", code: "05" },
  { id: "events", title: "Events", subtitle: "Create Memories", code: "06" },
  { id: "sponsorship", title: "Sponsorship", subtitle: "Unlock Opportunities", code: "07" },
];

export default function DomainCards({ selected, onToggle }) {
  return (
    <section className="relative w-full px-4 py-24">
      <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-matrix-green text-glow-green sm:text-4xl">
          Choose Your Domain
        </h2>
        <p className="mt-3 font-terminal text-sm text-matrix-gray">
          Select every path that calls to you.{" "}
          <span className="text-matrix-red">* (select at least one)</span>
        </p>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOMAINS.map((domain, i) => {
          const isSelected = selected.includes(domain.id);
          return (
            <FadeIn key={domain.id} delay={i * 0.06}>
              <motion.button
                type="button"
                onClick={() => onToggle(domain.id)}
                whileHover={{ scale: 1.03, rotate: -0.4 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex h-full w-full flex-col items-start gap-3 rounded-xl border px-6 py-8 text-left transition-colors duration-300 ${
                  isSelected
                    ? "border-matrix-green bg-matrix-green/10 border-glow-green"
                    : "border-white/10 bg-white/[0.02] hover:border-matrix-green/60"
                }`}
              >
                <span
                  className={`font-terminal text-xs tracking-widest ${
                    isSelected ? "text-matrix-green" : "text-matrix-gray/60"
                  }`}
                >
                  // {domain.code}
                </span>
                <h3
                  className={`font-heading text-lg font-bold tracking-wide sm:text-xl ${
                    isSelected ? "text-matrix-green text-glow-green" : "text-white"
                  }`}
                >
                  {domain.title}
                </h3>
                <p className="font-terminal text-sm text-matrix-gray">
                  {domain.subtitle}
                </p>

                <span
                  className={`absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-sm border font-terminal text-xs transition-all ${
                    isSelected
                      ? "border-matrix-green text-matrix-green opacity-100"
                      : "border-white/20 text-transparent opacity-0 group-hover:opacity-60"
                  }`}
                >
                  {isSelected ? "✓" : "+"}
                </span>

                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[0_0_40px_rgba(0,255,65,0.25)] transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
