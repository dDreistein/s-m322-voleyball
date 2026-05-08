import Topbar from "@/app/components/Topbar";
import SiteFooter from "@/app/components/SiteFooter";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1240px] p-6 max-[640px]:p-3.5">
      <Topbar activeHref="/" />

      <main>
        <section className="mt-14 grid min-h-[640px] grid-cols-[1.1fr_0.9fr] gap-7 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--panel)] p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)] max-[980px]:grid-cols-1">
          <div className="flex flex-col">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
              Startseite
            </p>
            <h1 className="mt-2 max-w-[12ch] font-display text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.1] text-[color:var(--deep)]">
              Spielinfos, Anmeldung, Teamgeist - alles auf einen Blick.
            </h1>
            <p className="mt-4 max-w-[36rem] text-base leading-[1.7]">
              Du willst spielen? Hier findest du das nächste Match, die letzten
              Resultate und den schnellsten Weg zur Mitgliedschaft. Klar, direkt
              und mobil optimiert.
            </p>

            <div
              className="mt-7 grid grid-cols-2 gap-3 max-[980px]:grid-cols-1"
              aria-label="Letztes Resultat und nächstes Spiel"
            >
              <article className="rounded-[18px] bg-[#fff7ed] p-4.5">
                <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                  Letztes Resultat
                </p>
                <h3 className="mt-2 font-display text-[1.35rem] text-[color:var(--deep)]">
                  Alpenstadt vs. VC Luzern 3:1
                </h3>
                <p>Sätze: 25:19, 22:25, 25:18, 25:21</p>
                <p className="mt-2.5 font-bold text-[color:var(--deep)]">Sieg zuhause</p>
              </article>
              <article className="rounded-[18px] bg-[#f8fafc] p-4.5">
                <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                  Nächstes Spiel
                </p>
                <h3 className="mt-2 font-display text-[1.35rem] text-[color:var(--deep)]">
                  Sa, 15:00 Uhr - Team West
                </h3>
                <p>Sporthalle A, Alpenstadt</p>
                <a
                  className="mt-2.5 inline-block font-bold text-[color:var(--deep)] transition hover:-translate-y-0.5"
                  href="/spielplan"
                >
                  Anfahrt und Kalender
                </a>
              </article>
            </div>

            <div
              className="mt-4.5 grid grid-cols-3 gap-3 max-[980px]:grid-cols-1"
              aria-label="Club-Kennzahlen"
            >
              <div className="rounded-[18px] bg-[#eef6f5] p-4.5">
                <strong className="block font-display text-[1.3rem] text-[color:var(--deep)]">
                  40+
                </strong>
                <span className="mt-1.5 block text-[color:var(--muted)]">
                  Aktive Spielerinnen und Spieler
                </span>
              </div>
              <div className="rounded-[18px] bg-[#eef6f5] p-4.5">
                <strong className="block font-display text-[1.3rem] text-[color:var(--deep)]">
                  3 Teams
                </strong>
                <span className="mt-1.5 block text-[color:var(--muted)]">
                  Von U16 bis 1. Team
                </span>
              </div>
              <div className="rounded-[18px] bg-[#eef6f5] p-4.5">
                <strong className="block font-display text-[1.3rem] text-[color:var(--deep)]">
                  48h
                </strong>
                <span className="mt-1.5 block text-[color:var(--muted)]">
                  Antwort auf Anfragen
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3.5">
              <a
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-[color:var(--orange)] px-6 py-3 font-bold text-[color:var(--white)] transition hover:-translate-y-0.5 hover:bg-[color:var(--orange-dark)]"
                href="/kontakt"
              >
                Mitgliedschaft starten
              </a>
              <a
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--deep)] px-6 py-3 font-bold text-[color:var(--deep)] transition hover:-translate-y-0.5 hover:bg-[rgba(99,179,237,0.18)]"
                href="/spielplan"
              >
                Spielplan
              </a>
              <a
                className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-[color:var(--deep)] px-6 py-3 font-bold text-[color:var(--deep)] transition hover:-translate-y-0.5 hover:bg-[rgba(99,179,237,0.18)]"
                href="/resultate"
              >
                Resultate
              </a>
            </div>

            <div className="mt-4.5 flex flex-wrap gap-2.5" aria-label="Direktlinks">
              <a
                className="rounded-full bg-[#e2e8f0] px-3.5 py-2 font-bold text-[color:var(--deep)]"
                href="/spielplan"
              >
                Spielplan
              </a>
              <a
                className="rounded-full bg-[#e2e8f0] px-3.5 py-2 font-bold text-[color:var(--deep)]"
                href="/resultate"
              >
                Resultate
              </a>
              <a
                className="rounded-full bg-[#e2e8f0] px-3.5 py-2 font-bold text-[color:var(--deep)]"
                href="/tabelle"
              >
                Rangliste
              </a>
            </div>
          </div>

          <figure className="m-0 grid gap-3.5">
            <img
              className="h-full min-h-[420px] w-full rounded-2xl object-cover shadow-[0_12px_24px_rgba(43,108,176,0.16)] max-[980px]:min-h-[320px]"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F81%2F198481-050-10CED2D9%2FGilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.jpg&f=1&nofb=1&ipt=d333d6780063a470e4c18927fff94594ba72c04cc34f928a21c4546e16604dd9"
              alt="Libero in Abwehrhaltung beim Heimspiel in einer Halle."
            />
            <figcaption className="text-[0.95rem] text-[color:var(--muted)]">
              Heimspiel-Moment aus der letzten Saison.
            </figcaption>
          </figure>
        </section>

        <section className="mt-14 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--panel)] p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
              Anmeldung
            </p>
            <h2 className="mt-1 font-display text-[clamp(1.5rem,3vw,1.75rem)] text-[color:var(--deep)]">
              In drei Schritten zum Probetraining
            </h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Wir melden uns innert 48 Stunden mit einem konkreten Termin. Du
              weisst immer, was als nächstes passiert.
            </p>
          </div>
          <div className="grid gap-4.5 min-[981px]:grid-cols-3">
            <article className="rounded-2xl border border-[color:var(--border)] bg-[#f8fafc] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-[color:var(--deep)]">
                1. Kurzes Formular
              </h3>
              <p>Trag Name, Kontakt und Position ein. Mehr brauchst du nicht.</p>
            </article>
            <article className="rounded-2xl border border-[color:var(--border)] bg-[#eff6ff] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-[color:var(--deep)]">
                2. Team-Zuordnung
              </h3>
              <p>
                Wir klären Level und Verfügbarkeit und schlagen dir das passende
                Team vor.
              </p>
            </article>
            <article className="rounded-2xl border border-[color:var(--border)] bg-[#fff1f2] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-[color:var(--deep)]">
                3. Probetraining
              </h3>
              <p>
                Du trainierst mit, lernst die Mannschaft kennen und entscheidest
                danach.
              </p>
            </article>
          </div>
          <a
            className="mt-4.5 inline-block border-b-2 border-b-[rgba(43,108,176,0.25)] font-bold text-[color:var(--deep)] transition hover:-translate-y-0.5"
            href="/kontakt"
          >
            Jetzt Mitgliedschaft starten
          </a>
        </section>

        <section className="mt-14 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--panel)] p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
              News
            </p>
            <h2 className="mt-1 font-display text-[clamp(1.5rem,3vw,1.75rem)] text-[color:var(--deep)]">
              Aktuell aus der Halle
            </h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Kurze Updates statt langer Texte. Das Wichtigste auf dem Handy.
            </p>
          </div>
          <div className="grid gap-4.5 min-[981px]:grid-cols-2">
            <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-[color:var(--deep)]">
                Saisonstart am 10. September
              </h3>
              <p>
                Das 1. Team startet zuhause gegen Team West. Einlauf mit der U16
                und Hallenmusik.
              </p>
            </article>
            <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-[color:var(--deep)]">
                Libero-Workshop mit Andrin Wirz
              </h3>
              <p>
                Offenes Training für Studierende am 5. Oktober. Fokus: Annahme
                und Feldverteidigung.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-14 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--panel)] p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
              Reputation
            </p>
            <h2 className="mt-1 font-display text-[clamp(1.5rem,3vw,1.75rem)] text-[color:var(--deep)]">
              Wofür der Club steht
            </h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Leistung, Fairness und ein Team, das dich wirklich aufnimmt.
            </p>
          </div>
          <div className="grid gap-4.5 min-[981px]:grid-cols-2">
            <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-[color:var(--deep)]">
                Top 3 in der 2. Liga
              </h3>
              <p>
                Seit drei Jahren konstant in der Spitzengruppe mit eigener
                Nachwuchsförderung.
              </p>
            </article>
            <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-[color:var(--deep)]">
                40+ aktive Spieler:innen
              </h3>
              <p>
                Von U16 bis 1. Team: klare Rollen, kurze Wege, respektvoller
                Umgang.
              </p>
            </article>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
