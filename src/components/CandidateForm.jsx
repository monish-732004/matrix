import FadeIn from "./FadeIn";
import TerminalField from "./TerminalField";

export default function CandidateForm({ data, onChange }) {
  const handle = (e) => onChange(e.target.name, e.target.value);

  return (
    <section className="relative w-full px-4 py-24">
      <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold text-matrix-green text-glow-green sm:text-4xl">
          Candidate Information
        </h2>
        <p className="mt-3 font-terminal text-sm text-matrix-gray">
          Identify yourself to the system.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="glass mx-auto flex max-w-2xl flex-col gap-8 rounded-2xl border-glow-green px-6 py-10 sm:px-10">
          <TerminalField
            label="Enter Name"
            name="name"
            value={data.name}
            onChange={handle}
            placeholder="John Anderson"
          />
          <TerminalField
            label="Registration Number"
            name="regNumber"
            value={data.regNumber}
            onChange={handle}
            placeholder="RA2211003xxxxxx"
          />
          <TerminalField
            label="SRM Email"
            name="email"
            type="email"
            value={data.email}
            onChange={handle}
            placeholder="you@srmist.edu.in"
          />
          <TerminalField
            label="Contact Number"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={handle}
            placeholder="+91 98765 43210"
          />
        </div>
      </FadeIn>
    </section>
  );
}
