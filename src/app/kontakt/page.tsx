import Topbar from "@/app/components/Topbar";

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-[1240px] p-6 max-[640px]:p-3.5">
      <Topbar activeHref="/kontakt" />

      <main>
        <section className="mt-14 rounded-[20px] border border-[color:var(--border)] bg-[#f8fafc] p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
              Verein & Kontakt
            </p>
            <h1 className="mt-2 font-display text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.1] text-[color:var(--deep)]">
              Trainingszeiten, Teamübersicht und Kontakt
            </h1>
            <p className="mt-3 text-[color:var(--muted)]">
              Alles Wichtige rund um den Club. Inklusive Mitgliedschaft und direktem Kontakt.
            </p>
          </div>

          <div className="grid gap-4.5 min-[981px]:grid-cols-2">
            <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                Trainingszeiten
              </p>
              <h3 className="mt-2 font-display text-[1.5rem] text-[color:var(--deep)]">
                Wo und wann?
              </h3>
              <p>Montag und Donnerstag, 19:00 Uhr. Sporthalle A.</p>
              <p>Freitag: Nachwuchs, 18:00 Uhr. Schulhalle Mitte.</p>
              <p>Samstag: Match-Review, 10:00 Uhr. Clubraum.</p>
            </article>

            <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                Ort
              </p>
              <h3 className="mt-2 font-display text-[1.5rem] text-[color:var(--deep)]">
                Halle auf der Karte
              </h3>
              <div className="mt-4.5 grid min-h-[180px] place-items-center rounded-[18px] bg-[#e2e8f0] font-extrabold text-[color:var(--deep)]">
                <span>Anfahrt</span>
              </div>
              <p className="mt-3 font-bold text-[color:var(--muted)]">
                Hallenweg 8, 6000 Alpenstadt
              </p>
            </article>
          </div>

          <div className="mt-4.5 grid gap-4.5 min-[981px]:grid-cols-2">
            <article className="rounded-[18px] bg-[#f8fafc] p-4.5">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                Teamübersicht
              </p>
              <h3 className="mt-2 font-display text-[1.35rem] text-[color:var(--deep)]">
                1. Team, 2. Team, Junioren
              </h3>
              <p className="mt-2 text-[color:var(--muted)]">
                1. Team (2. Liga), 2. Team (3. Liga) und U16. Wir helfen dir bei der
                Einordnung.
              </p>
            </article>

            <article className="rounded-[18px] bg-[#f8fafc] p-4.5">
              <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                Kontakt
              </p>
              <h3 className="mt-2 font-display text-[1.35rem] text-[color:var(--deep)]">
                Ansprechpersonen
              </h3>
              <p>Präsidium: Alina Fischer · sport@vc-alpenstadt.ch</p>
              <p>Mitgliedschaft: Bela Paavo Müller · mitglied@vc-alpenstadt.ch</p>
            </article>
          </div>

          <form className="mt-4.5 grid gap-4 rounded-[22px] border border-[color:var(--border)] bg-[color:var(--white)] p-6">
            <label className="grid gap-2">
              <span className="text-[0.85rem] font-bold text-[color:var(--muted)]">
                Name
              </span>
              <input
                className="w-full rounded-xl border border-[#cbd5e0] bg-[color:var(--white)] px-4 py-3.5 font-sans focus:outline-none focus:ring-4 focus:ring-[rgba(99,179,237,0.35)] focus:border-[color:var(--deep)]"
                type="text"
                placeholder="Vorname Nachname"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.85rem] font-bold text-[color:var(--muted)]">
                E-Mail
              </span>
              <input
                className="w-full rounded-xl border border-[#cbd5e0] bg-[color:var(--white)] px-4 py-3.5 font-sans focus:outline-none focus:ring-4 focus:ring-[rgba(99,179,237,0.35)] focus:border-[color:var(--deep)]"
                type="email"
                placeholder="name@mail.ch"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.85rem] font-bold text-[color:var(--muted)]">
                Position / Level
              </span>
              <input
                className="w-full rounded-xl border border-[#cbd5e0] bg-[color:var(--white)] px-4 py-3.5 font-sans focus:outline-none focus:ring-4 focus:ring-[rgba(99,179,237,0.35)] focus:border-[color:var(--deep)]"
                type="text"
                placeholder="z. B. Libero, Mittelblock, Einsteiger"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.85rem] font-bold text-[color:var(--muted)]">
                Nachricht
              </span>
              <textarea
                className="w-full rounded-xl border border-[#cbd5e0] bg-[color:var(--white)] px-4 py-3.5 font-sans focus:outline-none focus:ring-4 focus:ring-[rgba(99,179,237,0.35)] focus:border-[color:var(--deep)]"
                rows={4}
                placeholder="Ich möchte am Probetraining teilnehmen."
              ></textarea>
            </label>
            <div className="mt-2">
              <button
                type="button"
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[color:var(--orange)] px-6 py-3 font-bold text-[color:var(--white)] transition hover:-translate-y-0.5 hover:bg-[color:var(--orange-dark)]"
              >
                Absenden
              </button>
            </div>
          </form>

          <div className="mt-4.5 grid gap-3.5 min-[981px]:grid-cols-4">
            <div className="grid min-h-[88px] place-items-center rounded-[18px] border border-dashed border-[color:var(--border)] bg-[color:var(--white)] font-bold text-[color:var(--muted)]">
              Sporthaus Koller
            </div>
            <div className="grid min-h-[88px] place-items-center rounded-[18px] border border-dashed border-[color:var(--border)] bg-[color:var(--white)] font-bold text-[color:var(--muted)]">
              Bäckerei Sonnenplatz
            </div>
            <div className="grid min-h-[88px] place-items-center rounded-[18px] border border-dashed border-[color:var(--border)] bg-[color:var(--white)] font-bold text-[color:var(--muted)]">
              Physio am See
            </div>
            <div className="grid min-h-[88px] place-items-center rounded-[18px] border border-dashed border-[color:var(--border)] bg-[color:var(--white)] font-bold text-[color:var(--muted)]">
              Stadtwerke Alpenstadt
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
