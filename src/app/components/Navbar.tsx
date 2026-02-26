import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blog" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-8 w-36">
            <Image
              src="/brand/Logos/zerolabs-primary-light.png.png"
              alt="Zero Labs"
              fill
              sizes="144px"
              className="object-contain"
              priority
            />
          </span>
        </Link>
        <span className="hidden text-xs uppercase tracking-[0.35em] text-white/50 sm:inline">
          AI OPS
        </span>
      </div>

      <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70 lg:justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="rounded-full border border-transparent px-3 py-1 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="h-10 rounded-full border border-white/20 bg-white/5 px-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:border-white/40 hover:bg-white/10"
        >
          Sign in
        </button>
        <button
          type="button"
          className="h-10 rounded-full bg-white px-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:bg-white/90"
        >
          Sign up
        </button>
        <button
          type="button"
          className="h-10 rounded-full border border-white/15 bg-transparent px-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/60 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
