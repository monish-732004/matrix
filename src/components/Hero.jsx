import { useRef, useState } from "react";
import { motion } from "framer-motion";
import MatrixRain from "./MatrixRain";
import useTypewriter from "../hooks/useTypewriter";

export default function Hero({ onEnter }) {
  const { output: line1 } = useTypewriter("Wake up.", { speed: 70, startDelay: 300 });
  const { output: line2, done: line2Done } = useTypewriter("Choose your path.", {
    speed: 55,
    startDelay: 1400,
  });

  const [hoverStage, setHoverStage] = useState("idle");
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const handleEnter = () => {
    clearTimers();
    setHoverStage("init");
    timers.current.push(
      setTimeout(() => setHoverStage("granted"), 550)
    );
  };

  const handleLeave = () => {
    clearTimers();
    setHoverStage("idle");
  };

  const buttonLabel = {
    idle: "[ ENTER THE MATRIX ]",
    init: ">>> Initializing...",
    granted: ">>> Access Granted.",
  }[hoverStage];

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-24">
      <MatrixRain className="opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-matrix-bg/40 via-matrix-bg/70 to-matrix-bg" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass crt-flicker relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 rounded-2xl border-glow-green px-6 py-12 text-center sm:px-12"
      >
        <span className="font-terminal text-xs tracking-[0.3em] text-matrix-blue text-glow-blue sm:text-sm">
          ACM SIGCHI SRM
        </span>

        <h1 className="font-heading text-2xl font-bold tracking-widest text-matrix-green text-glow-green sm:text-3xl">
          RECRUITMENTS{" "}
          <span className="text-white">//</span>{" "}
          <span className="animate-blink">OPEN</span>
        </h1>

        <div className="flex items-center gap-2 rounded-full border border-matrix-blue/40 bg-matrix-blue/5 px-4 py-1.5 font-terminal text-xs tracking-widest text-matrix-blue text-glow-blue sm:text-sm">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-matrix-blue" />
          RECRUITMENT DRIVE: AUG 01 – 02
        </div>

        <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-matrix-green/60 to-transparent" />

        <p className="font-terminal text-sm leading-relaxed tracking-wide text-matrix-gray sm:text-base">
          THE SYSTEM NEEDS BUILDERS.
          <br />
          THE FUTURE NEEDS CREATORS.
        </p>

        <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-matrix-green/60 to-transparent" />

        <div className="font-terminal text-lg text-white sm:text-xl">
          <p>
            {line1}
            {!line2 && <span className="animate-blink text-matrix-green">█</span>}
          </p>
          <p className="text-matrix-green text-glow-green">
            {line2}
            {line2Done === false && line2 && (
              <span className="animate-blink">█</span>
            )}
          </p>
        </div>

        <motion.button
          onClick={onEnter}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 min-w-[280px] rounded-md border-2 border-matrix-green bg-matrix-green/10 px-8 py-4 font-terminal text-sm font-semibold tracking-wider text-matrix-green text-glow-green shadow-[0_0_20px_rgba(0,255,65,0.35)] transition-colors hover:bg-matrix-green/20 sm:text-base"
        >
          {buttonLabel}
        </motion.button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 z-10 font-terminal text-matrix-green/70"
      >
        ▼
      </motion.div>
    </section>
  );
}
