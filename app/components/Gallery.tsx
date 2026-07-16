import Reveal from "./Reveal";

const frames = [
  {
    caption: "Qatar 2024",
    note: "Sprint pole, Lusail floodlights.",
    span: "lg:col-span-7",
  },
  {
    caption: "Miami GP 2024",
    note: "First win, Hard Rock Stadium.",
    span: "lg:col-span-5",
  },
  {
    caption: "Silverstone 2024",
    note: "Home crowd, home win.",
    span: "lg:col-span-5",
  },
  {
    caption: "Monza 2024",
    note: "Temple of speed.",
    span: "lg:col-span-7",
  },
];

export default function Gallery() {
  return (
    <section className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-350">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            The Season
          </p>
          <h2 className="display mt-4 max-w-2xl text-4xl leading-[0.95] sm:text-6xl">
            Moments that built the year.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {frames.map((frame, i) => (
            <Reveal key={frame.caption} delay={i * 100} className={frame.span}>
              <div className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-3xl border border-border p-6 sm:aspect-[16/10]">
                <div className="photo absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
                <div className="relative">
                  <p className="display text-2xl sm:text-3xl">
                    {frame.caption}
                  </p>
                  <p className="mt-1 text-sm text-muted">{frame.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
