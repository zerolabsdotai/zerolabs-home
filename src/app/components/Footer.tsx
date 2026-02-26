export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} zerolabsai.com. All rights reserved.</span>
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          Built for AI operations
        </span>
      </div>
    </footer>
  );
}
