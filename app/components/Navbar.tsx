"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#on-track", label: "On Track" },
  { href: "/#off-track", label: "Off Track" },
  { href: "/#partners", label: "Partnerships" },
  { href: "/calendar", label: "Calendar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-350 items-center justify-between px-6 py-5 lg:px-10">
        {/* Wordmark */}
        <a href="/#top" className="leading-[0.82] text-foreground">
          <span className="block font-serif text-2xl tracking-tight sm:text-3xl">
            LANDO
          </span>
          <span className="block text-2xl font-black tracking-tight sm:text-3xl">
            NORRIS
          </span>
        </a>

        {/* Center L7 mark */}
        <a
          href="/#top"
          aria-label="Lando Norris"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-accent"
        >
          <svg viewBox="0 0 64 44" className="h-7 w-11" fill="currentColor">
            <g transform="skewX(-10)">
              <path d="M8,4 h11 v22 h15 v11 H8 Z" />
              <path d="M40,4 h22 v8 l-13,25 h-12 l13,-25 h-10 z" />
            </g>
          </svg>
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <a
            href="/#store"
            className="hidden items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-black uppercase tracking-wide text-black transition-transform hover:scale-105 sm:flex"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6l-3-4Z" />
              <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            Store
          </a>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="mx-auto flex max-w-350 flex-col gap-1 px-6 py-6 lg:px-10">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="display block py-3 text-3xl text-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/#store"
                onClick={() => setOpen(false)}
                className="display block py-3 text-3xl text-accent"
              >
                Store
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
