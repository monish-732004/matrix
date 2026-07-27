import FadeIn from "./FadeIn";
import TerminalField from "./TerminalField";

export default function Questions({ data, onChange }) {
  const handle = (e) => onChange(e.target.name, e.target.value);

  return (
    <section className="relative w-full px-4 py-24">
      <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-matrix-green text-glow-green sm:text-4xl">
          Questions
        </h2>
        <p className="mt-3 font-terminal text-sm text-matrix-gray">
          The system wants to understand your intent.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="glass mx-auto flex max-w-2xl flex-col gap-10 rounded-2xl border-glow-green px-6 py-10 sm:px-10">
          <TerminalField
            as="textarea"
            rows={4}
            label="Why do you want to join ACM SIGCHI?"
            name="whyJoin"
            value={data.whyJoin}
            onChange={handle}
            placeholder="Type your answer..."
          />
          <TerminalField
            as="textarea"
            rows={4}
            label="Why should we choose you?"
            name="whyYou"
            value={data.whyYou}
            onChange={handle}
            placeholder="Type your answer..."
          />
          <TerminalField
            as="textarea"
            rows={4}
            label="Tell us about your projects."
            name="projects"
            value={data.projects}
            onChange={handle}
            placeholder="Type your answer..."
          />
        </div>
      </FadeIn>
    </section>
  );
}
