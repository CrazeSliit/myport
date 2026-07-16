import Link from "next/link";
import TopoBackground from "./TopoBackground";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-end overflow-hidden bg-cream text-cream-ink"
    >
      <TopoBackground />

      {/* Oversized portrait block — drop a file at /public/hero.png to replace the placeholder */}
      <div
        className="photo absolute bottom-0 left-1/2 h-[92%] w-[52rem] max-w-[96vw] -translate-x-1/2 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
        aria-label="Lando Norris"
      />
      <div className="absolute inset-0 bg-linear-to-t from-cream via-cream/10 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-cream/70 via-transparent to-transparent" />

      {/* Headline */}
      <div className="relative z-10 mx-auto w-full max-w-350 px-6 pb-56 pt-40 lg:px-10 lg:pb-64">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          Lando Norris
        </p>
        <h1 className="display mt-5 text-6xl leading-[0.86] sm:text-8xl lg:text-[9rem]">
          Always
          <br />
          Bringing
          <br />
          <span className="text-accent">The Fight.</span>
        </h1>
        <p className="mt-6 max-w-md text-sm font-semibold uppercase tracking-[0.2em] text-cream-ink/70">
          2025 McLaren Formula 1 Driver
        </p>
      </div>

      {/* NEXT RACE card */}
      <Link
        href="/calendar"
        className="group relative z-10 mb-10 ml-6 lg:mb-12 lg:ml-10"
      >
        <div className="w-44 rounded-2xl border border-cream-ink/20 bg-cream/70 p-4 backdrop-blur-md transition-colors group-hover:border-accent">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream-ink/60">
            Next Race
          </p>

          {/* Spa-Francorchamps circuit outline */}
          <svg
            viewBox="0 0 100 70"
            className="mx-auto mt-4 h-16 w-full text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14,20 C24,10 40,8 48,16 C54,22 46,28 52,32 C64,40 84,30 88,42 C91,50 78,52 74,46 C70,40 58,42 56,50 C54,58 40,60 32,54 C26,50 30,44 24,40 C14,34 8,30 14,20 Z" />
          </svg>

          <p className="mt-3 text-center text-sm font-black uppercase tracking-tight">
            Belgian GP
          </p>
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-cream-ink/50">
            Spa-Francorchamps
          </p>

          <div className="my-3 h-px bg-cream-ink/15" />

          <span className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            Full Calendar
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>

      {/* Signature mark */}
      <svg
        aria-hidden
        viewBox="0 0 220 90"
        className="pointer-events-none absolute bottom-10 right-6 z-10 h-14 w-auto text-accent/90 lg:bottom-12 lg:right-10 lg:h-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8,64 C22,20 34,18 40,40 C44,54 50,58 58,44 C66,30 72,28 76,46 C80,64 88,66 96,48 C104,30 112,26 118,42 C122,54 130,58 140,40 C150,22 160,18 168,36 C174,50 182,54 194,38 C202,28 208,26 212,34" />
      </svg>
    </section>
  );
}
