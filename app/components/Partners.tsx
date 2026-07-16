import Reveal from "./Reveal";

const partners = [
  "McLaren",
  "Ralph Lauren",
  "PlayStation",
  "Quadrant",
  "TUMI",
  "Hilton",
  "Uber",
  "Google",
  "Bell Helmets",
];

export default function Partners() {
  const track = [...partners, ...partners];

  return (
    <section id="partners" className="py-28">
      <div className="mx-auto max-w-350 px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-5xl sm:text-7xl">
              Partners <span className="text-accent">&amp;</span> Campaigns
            </h2>
            <p className="max-w-md text-muted">
              Lando is proud to collaborate with a range of partners, who share
              his passion for performance across a range of industries.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Scrolling partner logos (text placeholders — swap for logo SVGs) */}
      <div className="mt-14 overflow-hidden border-y border-border py-8">
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap px-8">
          {track.map((name, i) => (
            <span
              key={i}
              className="display text-2xl text-foreground/40 transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-350 px-6 lg:px-10">
        <Reveal>
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            View Partnerships
            <span>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
