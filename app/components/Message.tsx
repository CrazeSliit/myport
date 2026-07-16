import Reveal from "./Reveal";

export default function Message() {
  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-10">
      {/* Watermark L7 mark */}
      <svg
        aria-hidden
        viewBox="0 0 64 44"
        className="pointer-events-none absolute -right-10 top-10 h-56 w-auto text-foreground/3 lg:h-72"
        fill="currentColor"
      >
        <g transform="skewX(-10)">
          <path d="M8,4 h11 v22 h15 v11 H8 Z" />
          <path d="M40,4 h22 v8 l-13,25 h-12 l13,-25 h-10 z" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-350">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Message from Lando
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="display mt-8 max-w-4xl text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Redefining limits, fighting for wins, bringing it all in all ways.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg text-muted">
            Defining a legacy in Formula 1 on and off the track. Since I was 7
            years old and had my first experience with kart racing, I&apos;ve
            worked tirelessly to make that dream come true.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <blockquote className="mt-16 border-t border-border pt-10">
            <p className="display max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl">
              &ldquo;It doesn&apos;t matter where you start,{" "}
              <span className="text-accent">it&apos;s how you progress</span>{" "}
              — that&apos;s the legacy I want, on the track and off it.&rdquo;
            </p>
            <svg
              aria-label="Lando Norris signature"
              viewBox="0 0 220 90"
              className="mt-8 h-14 w-auto text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8,64 C22,20 34,18 40,40 C44,54 50,58 58,44 C66,30 72,28 76,46 C80,64 88,66 96,48 C104,30 112,26 118,42 C122,54 130,58 140,40 C150,22 160,18 168,36 C174,50 182,54 194,38 C202,28 208,26 212,34" />
            </svg>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
