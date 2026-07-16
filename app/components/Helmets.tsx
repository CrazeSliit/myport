import Reveal from "./Reveal";

const helmets = [
  { name: "Discoball", year: "2025" },
  { name: "Dark Glitter", year: "2025" },
  { name: "Season", year: "2025" },
  { name: "Porcelain", year: "2024" },
  { name: "Japan", year: "2024" },
  { name: "Dark Mode", year: "2024" },
  { name: "Las Vegas", year: "2023" },
  { name: "Chrome", year: "2023" },
  { name: "Beachball", year: "2023" },
  { name: "Basketball", year: "2022" },
  { name: "Silverstone", year: "2020" },
  { name: "Season", year: "2019" },
];

export default function Helmets() {
  return (
    <section id="helmets" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-350">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Helmets
              </p>
              <h2 className="display mt-4 text-5xl sm:text-7xl">
                Hall of Fame
              </h2>
            </div>
            <p className="max-w-md text-muted">
              From his iconic blobs to innovative one-off designs, Tharinduhas
              always been passionate about designing innovative and memorable
              helmets.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {helmets.map((helmet, i) => (
            <Reveal key={`${helmet.name}-${helmet.year}`} delay={(i % 4) * 80}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
                {/* Helmet visual placeholder — swap for helmet render */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-32 rounded-t-full rounded-b-lg bg-linear-to-br from-accent/30 via-surface-2 to-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/90 to-transparent p-4">
                  <span className="font-semibold">{helmet.name}</span>
                  <span className="text-xs text-muted">{helmet.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
