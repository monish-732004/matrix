import { useState } from "react";

export default function TerminalField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  as = "input",
  rows,
}) {
  const [focused, setFocused] = useState(false);
  const Component = as;

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-2 block font-terminal text-sm text-matrix-green text-glow-green"
      >
        &gt; {label} <span className="text-matrix-red">*</span>
      </label>
      <div
        className={`flex items-start gap-1 border-b-2 pb-2 transition-colors ${
          focused ? "border-matrix-green" : "border-white/15"
        }`}
      >
        <Component
          id={name}
          name={name}
          type={as === "input" ? type : undefined}
          rows={rows}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full resize-none bg-transparent font-terminal text-base text-white placeholder-white/20 outline-none"
          autoComplete="off"
          required
        />
        {focused && (
          <span className="animate-blink font-terminal text-matrix-green">█</span>
        )}
      </div>
    </div>
  );
}
