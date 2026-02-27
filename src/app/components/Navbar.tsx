"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isAuthed = false; // TODO: Replace with auth hook/provider.

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="relative w-full">
      <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.9)]">
        <Image
          src="/brand/Banners/zerolabs-banner-dark-base.png"
          alt="Zero Labs banner"
          width={1500}
          height={500}
          priority
          className="h-auto w-full object-contain"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070b19]/60 via-transparent to-[#070b19]/50" />
      </div>

      <div
        ref={menuRef}
        className="absolute right-4 top-4 flex items-center sm:right-6 sm:top-6"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/40 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)] backdrop-blur-sm transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <span className="sr-only">Toggle menu</span>
          <Image
            src="/brand/Avatars/Dark%20-%20PNG/Avatar-Dark-64.png"
            alt="Zero Labs menu"
            width={28}
            height={28}
            className="rounded-full"
          />
        </button>

        {isOpen ? (
          <div
            className="absolute right-0 top-12 w-48 rounded-2xl border border-white/10 bg-slate-950/90 p-2 text-sm text-white/70 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.95)] backdrop-blur-xl"
            role="menu"
          >
            {menuLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="mt-1 w-full rounded-xl px-3 py-2 text-left transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {isAuthed ? "Sign out" : "Login/Sign up"}
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
