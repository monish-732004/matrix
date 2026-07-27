import MatrixRain from "./MatrixRain";
import FadeIn from "./FadeIn";

export default function Quote() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden px-4 py-24">
      <MatrixRain className="opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-matrix-bg/80" />

      <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="font-heading text-3xl font-bold leading-snug text-matrix-gray sm:text-4xl md:text-5xl">
          Most people <span className="text-white">wait.</span>
        </p>
        <p className="mt-4 font-heading text-3xl font-bold leading-snug text-matrix-green text-glow-green sm:text-4xl md:text-5xl">
          Some people build.
        </p>
        <p className="mt-10 font-terminal text-lg text-matrix-blue text-glow-blue sm:text-xl">
          Which one are you?
        </p>
      </FadeIn>
    </section>
  );
}
