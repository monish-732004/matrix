export default function Logo() {
  return (
    <a
      href="#"
      className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center rounded-xl border border-matrix-green/40 bg-white/95 p-2 shadow-[0_0_18px_rgba(0,255,65,0.35)] transition-transform hover:scale-105 sm:top-6 sm:p-3"
    >
      <img
        src="/logo.jpeg"
        alt="ACM SIGCHI SRM"
        className="h-14 w-auto rounded-md sm:h-20"
      />
    </a>
  );
}
