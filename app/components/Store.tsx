import Reveal from "./Reveal";

export default function Store() {
  return (
    <section id="store" className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-350">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <div className="photo absolute inset-0" />
            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-transparent" />

            <div className="relative flex flex-col justify-center gap-6 px-8 py-24 sm:px-16 lg:py-32">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Lando Store
              </p>
              <h2 className="display max-w-2xl text-5xl leading-[0.95] sm:text-7xl">
                World Drivers&apos; Champion
              </h2>
              <p className="max-w-lg text-lg text-muted">
                Celebrate this incredible moment with a collection designed for
                the fans who never stopped believing. Wear it, frame it,
                treasure it forever.
              </p>
              <a
                href="#"
                className="w-fit rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
              >
                Visit the Store
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
