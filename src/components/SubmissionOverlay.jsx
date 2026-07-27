import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatrixRain from "./MatrixRain";
import { supabase } from "../lib/supabaseClient";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const STAGE_TEXT = {
  connecting: "Connecting...",
  authenticating: "Authenticating...",
  welcome: "Welcome.",
  done: "Recruitment Submitted.",
};

export default function SubmissionOverlay({ payload, onClose }) {
  const [stage, setStage] = useState("connecting");
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    setStage("connecting");

    const run = async () => {
      await wait(900);
      if (cancelled) return;
      setStage("authenticating");

      try {
        const { error: insertError } = await supabase.from("recruits").insert({
          name: payload.candidate.name,
          reg_number: payload.candidate.regNumber,
          email: payload.candidate.email,
          phone: payload.candidate.phone,
          domains: payload.domains,
          skills: payload.skills,
          why_join: payload.answers.whyJoin,
          why_you: payload.answers.whyYou,
          projects: payload.answers.projects,
        });
        if (cancelled) return;

        if (insertError) {
          setError(insertError.message);
          return;
        }
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Unable to reach Supabase.");
        return;
      }

      await wait(700);
      if (cancelled) return;
      setStage("welcome");

      await wait(900);
      if (cancelled) return;
      setStage("done");
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [payload, attempt]);

  const finished = stage === "done";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <MatrixRain className="opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-matrix-bg/60" />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6 px-6 text-center">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="font-terminal text-2xl font-bold text-matrix-red text-glow-red sm:text-4xl"
            >
              Connection Failed.
            </motion.p>
          ) : (
            <motion.p
              key={stage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="font-terminal text-2xl font-bold text-matrix-green text-glow-green sm:text-4xl"
            >
              {STAGE_TEXT[stage]}
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass flex flex-col items-center gap-4 rounded-2xl border border-matrix-red/50 px-8 py-8"
            >
              <p className="font-terminal text-sm text-matrix-gray">{error}</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setAttempt((a) => a + 1)}
                  className="rounded-md border border-matrix-green px-5 py-2 font-terminal text-sm text-matrix-green transition-colors hover:bg-matrix-green/10"
                >
                  Retry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md border border-white/20 px-5 py-2 font-terminal text-sm text-matrix-gray transition-colors hover:border-white/40"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}

          {finished && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glass flex flex-col items-center gap-4 rounded-2xl border-glow-green px-8 py-8"
            >
              <p className="font-body text-base text-white">
                Welcome to ACM SIGCHI SRM.
              </p>
              <p className="font-terminal text-sm text-matrix-gray">
                Your entry has been logged. The recruitment drive runs Aug 1 – 2 —
                watch your inbox for details.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 rounded-md border border-matrix-green px-6 py-2 font-terminal text-sm text-matrix-green transition-colors hover:bg-matrix-green/10"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
