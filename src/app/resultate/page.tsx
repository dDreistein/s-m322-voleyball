import Topbar from "@/app/components/Topbar";

export default function ResultatePage() {
  return (
    <div className="mx-auto max-w-[1240px] p-6 max-[640px]:p-3.5">
      <Topbar activeHref="/resultate" />

      <main>
        <section className="mt-14 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--panel)] p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
              Resultate
            </p>
            <h1 className="mt-2 font-display text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.1] text-[color:var(--deep)]">
              Letzte Spiele
            </h1>
            <p className="mt-3 text-[color:var(--muted)]">
              Satzresultate, Sieg oder Niederlage und schnelle Links zum Teilen.
            </p>
          </div>

          <div className="grid gap-4.5 min-[981px]:grid-cols-2">
            <article className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 text-[color:var(--deep)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)] before:absolute before:right-6 before:top-6 before:h-3 before:w-3 before:rounded-full before:bg-current">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                Sieg
              </p>
              <h3 className="mt-2 font-display text-[1.5rem] text-[color:var(--deep)]">
                Alpenstadt vs. Team West
              </h3>
              <p className="font-bold text-[color:var(--ink)]">
                25:19 | 22:25 | 25:18 | 25:21
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#e2e8f0] px-3 py-1 text-[0.9rem] font-bold text-[color:var(--ink)]">
                3:1 - Heimspiel
              </p>
              <p>Starkes Comeback nach Satz 1. Service-Druck von Position 1.</p>
              <div className="mt-4.5 flex flex-wrap gap-2.5">
                <a
                  href="#"
                  className="rounded-full bg-[rgba(99,179,237,0.18)] px-3.5 py-2 font-bold text-[color:var(--deep)]"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[rgba(99,179,237,0.18)] px-3.5 py-2 font-bold text-[color:var(--deep)]"
                >
                  Instagram
                </a>
              </div>
            </article>

            <article className="relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 text-[#824c28] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)] before:absolute before:right-6 before:top-6 before:h-3 before:w-3 before:rounded-full before:bg-current">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                Niederlage
              </p>
              <h3 className="mt-2 font-display text-[1.5rem] text-[color:var(--deep)]">
                Alpenstadt vs. Club Nord
              </h3>
              <p className="font-bold text-[color:var(--ink)]">
                23:25 | 25:21 | 21:25 | 24:26
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#e2e8f0] px-3 py-1 text-[0.9rem] font-bold text-[color:var(--ink)]">
                1:3 - Auswärts
              </p>
              <p>Knappe Partie. Gute Entwicklung im Angriff, Annahme stabilisiert.</p>
              <div className="mt-4.5 flex flex-wrap gap-2.5">
                <a
                  href="#"
                  className="rounded-full bg-[rgba(99,179,237,0.18)] px-3.5 py-2 font-bold text-[color:var(--deep)]"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="rounded-full bg-[rgba(99,179,237,0.18)] px-3.5 py-2 font-bold text-[color:var(--deep)]"
                >
                  Instagram
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
