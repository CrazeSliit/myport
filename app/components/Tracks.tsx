import Reveal from "./Reveal";

const cards = [
  {
    id: "on-track",
    label: "On Track",
    copy: "Most recent results, career stats and photos from trackside.",
    cta: "View On Track",
  },
  {
    id: "off-track",
    label: "Off Track",
    copy: "Campaigns, shoots and other such promotional materials for fans.",
    cta: "View Off Track",
  },
];

export default function Tracks() {
  return (
    <section className="px-6 py-10 lg:px-10">
      <div className="mx-auto grid max-w-350 gap-6 lg:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.id} delay={i * 120}>
            <a
              id={card.id}
              href="#"
              className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-border p-8"
            >
              <div className="photo absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative">
                <h3 className="display text-5xl sm:text-6xl">{card.label}</h3>
                <p className="mt-4 max-w-sm text-muted">{card.copy}</p>
                <span className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent">
                  {card.cta}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
