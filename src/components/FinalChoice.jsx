import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

export default function FinalChoice({ onRedPill, disabled }) {
  const [blueMessage, setBlueMessage] = useState(false);

  const handleBluePill = () => {
    setBlueMessage(true);
    window.setTimeout(() => setBlueMessage(false), 2200);
  };

  return (
    <section className="relative w-full px-4 py-24">
      <FadeIn className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-matrix-green text-glow-green sm:text-4xl">
          Final Choice
        </h2>
        <p className="mt-3 font-terminal text-sm text-matrix-gray">
          This is your last chance. After this, there is no turning back.
        </p>
      </FadeIn>

      <div className="mx-auto flex max-w-3xl flex-col items-stretch justify-center gap-8 sm:flex-row">
        <FadeIn className="flex-1">
          <motion.button
            type="button"
            onClick={handleBluePill}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-full w-full flex-col items-center gap-3 rounded-2xl border-2 border-matrix-blue/50 bg-matrix-blue/5 px-8 py-10 text-center transition-colors duration-300 hover:border-matrix-blue"
          >
            <span className="h-6 w-6 rounded-full bg-matrix-blue shadow-[0_0_16px_rgba(0,207,255,0.7)]" />
            <span className="font-heading text-lg font-bold tracking-wide text-matrix-blue text-glow-blue">
              BLUE PILL
            </span>
            <span className="font-terminal text-sm text-matrix-gray">
              Return to the ordinary.
            </span>
            <span className="font-terminal text-xs text-matrix-gray/70">
              Close this page.
            </span>
          </motion.button>
          <AnimatePresence>
            {blueMessage && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-center font-terminal text-xs text-matrix-blue/80"
              >
                Nothing happens. The story ends here — for now.
              </motion.p>
            )}
          </AnimatePresence>
        </FadeIn>

        <FadeIn className="flex-1" delay={0.1}>
          <motion.button
            type="button"
            disabled={disabled}
            onClick={onRedPill}
            whileHover={disabled ? {} : { scale: 1.02 }}
            whileTap={disabled ? {} : { scale: 0.98 }}
            className={`group flex h-full w-full flex-col items-center gap-3 rounded-2xl border-2 border-matrix-red/50 bg-matrix-red/5 px-8 py-10 text-center transition-all duration-300 ${
              disabled
                ? "cursor-not-allowed opacity-40"
                : "hover:border-matrix-red hover:shadow-[0_0_45px_rgba(255,49,49,0.55)]"
            }`}
          >
            <span className="h-6 w-6 rounded-full bg-matrix-red shadow-[0_0_16px_rgba(255,49,49,0.8)]" />
            <span className="font-heading text-lg font-bold tracking-wide text-matrix-red text-glow-red">
              RED PILL
            </span>
            <span className="font-terminal text-sm text-matrix-gray">
              Join ACM SIGCHI
            </span>
            <span className="font-terminal text-xs text-matrix-gray/70">
              Become a Builder.
            </span>
          </motion.button>
          {disabled && (
            <p className="mt-3 text-center font-terminal text-xs text-matrix-red/70">
              Complete the required fields above first.
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
