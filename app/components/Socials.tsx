import Reveal from "./Reveal";

const socials = [
  { platform: "TikTok", handle: "@TharinduChamuditha" },
  { platform: "Instagram", handle: "@Tharindu" },
  { platform: "YouTube", handle: "@TharinduChamuditha" },
  { platform: "Twitch", handle: "@TharinduChamuditha" },
];

export default function Socials() {
  return (
    <section id="socials" className="px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-350">
        <Reveal>
          <h2 className="display text-4xl sm:text-6xl">
            What&apos;s Up <span className="text-accent">On Socials</span>
          </h2>
        </Reveal>

        {/* Social content grid — swap placeholders for real posts */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {socials.map((social, i) => (
            <Reveal key={social.platform} delay={i * 80}>
              <a
                href="#"
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-border p-5"
              >
                <div className="photo absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {social.platform}
                  </p>
                  <p className="mt-1 font-semibold">{social.handle}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
