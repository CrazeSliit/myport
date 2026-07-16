import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Calendar — Lando Norris",
  description: "The 2025 Formula 1 race calendar, tracked round by round.",
};

const races = [
  { round: "01", gp: "Australian GP", circuit: "Albert Park", date: "Mar 16" },
  { round: "02", gp: "Chinese GP", circuit: "Shanghai", date: "Mar 23" },
  { round: "03", gp: "Japanese GP", circuit: "Suzuka", date: "Apr 6" },
  { round: "04", gp: "Bahrain GP", circuit: "Sakhir", date: "Apr 13" },
  { round: "05", gp: "Saudi Arabian GP", circuit: "Jeddah", date: "Apr 20" },
  { round: "06", gp: "Miami GP", circuit: "Miami", date: "May 4" },
  { round: "07", gp: "Emilia Romagna GP", circuit: "Imola", date: "May 18" },
  { round: "08", gp: "Monaco GP", circuit: "Monte Carlo", date: "May 25" },
  { round: "09", gp: "Spanish GP", circuit: "Barcelona", date: "Jun 1" },
  { round: "10", gp: "Canadian GP", circuit: "Montreal", date: "Jun 15" },
  { round: "11", gp: "Austrian GP", circuit: "Spielberg", date: "Jun 29" },
  { round: "12", gp: "British GP", circuit: "Silverstone", date: "Jul 6" },
  {
    round: "13",
    gp: "Belgian GP",
    circuit: "Spa-Francorchamps",
    date: "Jul 27",
    next: true,
  },
  { round: "14", gp: "Hungarian GP", circuit: "Budapest", date: "Aug 3" },
  { round: "15", gp: "Dutch GP", circuit: "Zandvoort", date: "Aug 31" },
  { round: "16", gp: "Italian GP", circuit: "Monza", date: "Sep 7" },
  { round: "17", gp: "Azerbaijan GP", circuit: "Baku", date: "Sep 21" },
  { round: "18", gp: "Singapore GP", circuit: "Marina Bay", date: "Oct 5" },
  { round: "19", gp: "United States GP", circuit: "Austin", date: "Oct 19" },
  { round: "20", gp: "Mexico City GP", circuit: "Mexico City", date: "Oct 26" },
  { round: "21", gp: "São Paulo GP", circuit: "Interlagos", date: "Nov 9" },
  { round: "22", gp: "Las Vegas GP", circuit: "Las Vegas", date: "Nov 22" },
  { round: "23", gp: "Qatar GP", circuit: "Lusail", date: "Nov 30" },
  { round: "24", gp: "Abu Dhabi GP", circuit: "Yas Marina", date: "Dec 7" },
];

export default function CalendarPage() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 px-6 pb-28 pt-40 lg:px-10">
        <div className="mx-auto max-w-350">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              2025 Season
            </p>
            <h1 className="display mt-5 text-5xl sm:text-7xl lg:text-8xl">
              Race Calendar
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Twenty-four rounds, one fight. Next up: Spa-Francorchamps for
              the Belgian Grand Prix.
            </p>
          </Reveal>

          <div className="mt-16 divide-y divide-border border-y border-border">
            {races.map((race, i) => (
              <Reveal key={race.round} delay={Math.min(i * 25, 400)}>
                <div
                  className={`flex items-center gap-6 py-5 ${
                    race.next ? "text-accent" : ""
                  }`}
                >
                  <span className="w-10 shrink-0 font-mono text-sm text-muted">
                    {race.round}
                  </span>
                  <div className="flex-1">
                    <p className="display text-xl sm:text-2xl">{race.gp}</p>
                    <p className="text-sm text-muted">{race.circuit}</p>
                  </div>
                  {race.next && (
                    <span className="hidden rounded-full border border-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest sm:block">
                      Next Race
                    </span>
                  )}
                  <span className="w-20 shrink-0 text-right text-sm font-semibold uppercase tracking-wide text-muted">
                    {race.date}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href="/"
              className="mt-14 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-accent"
            >
              ← Back Home
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
