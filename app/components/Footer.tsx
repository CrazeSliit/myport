const nav = [
  { href: "#top", label: "Home" },
  { href: "#on-track", label: "On Track" },
  { href: "#off-track", label: "Off Track" },
  { href: "#partners", label: "Partnerships" },
  { href: "#calendar", label: "Calendar" },
  { href: "#store", label: "Store" },
];

const socials = [
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Twitch", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border">
      {/* Closing banner */}
      <div className="relative border-b border-border px-6 py-24 text-center lg:px-10">
        <svg
          aria-hidden
          viewBox="0 0 64 44"
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-auto -translate-x-1/2 -translate-y-1/2 text-accent/5 lg:h-80"
          fill="currentColor"
        >
          <g transform="skewX(-10)">
            <path d="M8,4 h11 v22 h15 v11 H8 Z" />
            <path d="M40,4 h22 v8 l-13,25 h-12 l13,-25 h-10 z" />
          </g>
        </svg>
        <h2 className="display relative text-5xl text-accent sm:text-8xl">
          Always Bringing
          <br />
          The Fight.
        </h2>
        <a
          href="mailto:enquiries@landonorris.com"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
        >
          Business Enquiries
        </a>
      </div>

      <div className="mx-auto max-w-350 px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div>
            <p className="display text-2xl">
              Lando<span className="text-accent">.</span>Norris
            </p>
            <p className="mt-2 text-sm text-muted">McLaren F1 · Since 2019</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Explore
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-foreground/80 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Follow
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-foreground/80 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lando Norris. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
