import Topbar from "@/app/components/Topbar";
import SiteFooter from "@/app/components/SiteFooter";

export default function Home() {
  return (
    <div className="mx-auto max-w-310 p-6 max-[640px]:p-3.5">
      <Topbar activeHref="/" />
      <main>
        <section className="mt-14 grid min-h-160 grid-cols-[1.1fr_0.9fr] gap-7 rounded-[20px] border border-(--border) bg-(--panel) p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)] max-[980px]:grid-cols-1">
          <div className="flex flex-col">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-(--orange)">
              Startseite
            </p>
            <h1 className="mt-2 max-w-[12ch] font-display text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.1] text-(--deep)">
              Spielinfos, Anmeldung, Teamgeist - alles auf einen Blick.
            </h1>
            <p className="mt-4  max-w-xl text-base leading-[1.7]">
              Du willst spielen? Hier findest du das nächste Match, die letzten
              Resultate und den schnellsten Weg zur Mitgliedschaft. Klar, direkt
              und mobil optimiert.
            </p>

            <div
              className="mt-7 grid grid-cols-2 gap-3 max-[980px]:grid-cols-1"
              aria-label="Letztes Resultat und nächstes Spiel"
            >
              <article className="rounded-[18px] bg-[#fff7ed] p-4.5">
                <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-(--orange)">
                  Letztes Resultat
                </p>
                <h3 className="mt-2 font-display text-[1.35rem] text-(--deep)">
                  Alpenstadt vs. VC Luzern 3:1
                </h3>
                <p>Sätze: 25:19, 22:25, 25:18, 25:21</p>
                <p className="mt-2.5 font-bold text-(--deep)">Sieg zuhause</p>
              </article>
              <article className="rounded-[18px] bg-[#f8fafc] p-4.5">
                <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-(--orange)">
                  Nächstes Spiel
                </p>
                <h3 className="mt-2 font-display text-[1.35rem] text-(--deep)">
                  Sa, 15:00 Uhr - Team West
                </h3>
                <p>Sporthalle A, Alpenstadt</p>
                <a
                  className="mt-2.5 inline-block font-bold text-(--deep) transition hover:-translate-y-0.5"
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
                <strong className="block font-display text-[1.3rem] text-(--deep)">
                  40+
                </strong>
                <span className="mt-1.5 block text-(--muted)">
                  Aktive Spielerinnen und Spieler
                </span>
              </div>
              <div className="rounded-[18px] bg-[#eef6f5] p-4.5">
                <strong className="block font-display text-[1.3rem] text-(--deep)">
                  3 Teams
                </strong>
                <span className="mt-1.5 block text-(--muted)">
                  Von U16 bis 1. Team
                </span>
              </div>
              <div className="rounded-[18px] bg-[#eef6f5] p-4.5">
                <strong className="block font-display text-[1.3rem] text-(--deep)">
                  48h
                </strong>
                <span className="mt-1.5 block text-(--muted)">
                  Antwort auf Anfragen
                </span>
              </div>
            </div>
            <div className="mt-4.5 flex flex-wrap gap-2.5" aria-label="Direktlinks">
              <a
                className="rounded-full bg-(--orange) px-4.5 py-2.5 font-bold text-white shadow-[0_4px_12px_rgba(249,115,22,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(249,115,22,0.35)]"
                href="/spielplan"
              >
                Spielplan
              </a>
              <a
                className="rounded-full bg-(--orange) px-4.5 py-2.5 font-bold text-white shadow-[0_4px_12px_rgba(249,115,22,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(249,115,22,0.35)]"
                href="/resultate"
              >
                Resultate
              </a>
              <a
                className="rounded-full bg-(--orange) px-4.5 py-2.5 font-bold text-white shadow-[0_4px_12px_rgba(249,115,22,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(249,115,22,0.35)]"
                href="/tabelle"
              >
                Rangliste
              </a>
            </div>

            <a
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--deep) px-6 py-3 font-bold text-white shadow-[0_6px_16px_rgba(43,108,176,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(43,108,176,0.4)]"
              href="/kontakt"
            >
              Probetraining anfragen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <figure className="m-0 grid gap-3.5">
            <img
              className="h-full min-h-105 w-full rounded-2xl object-cover shadow-[0_12px_24px_rgba(43,108,176,0.16)] max-[980px]:min-h-80"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F81%2F198481-050-10CED2D9%2FGilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.jpg&f=1&nofb=1&ipt=d333d6780063a470e4c18927fff94594ba72c04cc34f928a21c4546e16604dd9"
              alt="Libero in Abwehrhaltung beim Heimspiel in einer Halle."
            />
            <figcaption className="text-[0.95rem] text-(--muted)">
              Heimspiel-Moment aus der letzten Saison.
            </figcaption>
          </figure>
        </section>
        <section className="mt-14 rounded-[20px] border border-(--border) bg-(--panel) p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-(--orange)">
              Anmeldung
            </p>
            <h2 className="mt-1 font-display text-[clamp(1.5rem,3vw,1.75rem)] text-(--deep)">
              In drei Schritten zum Probetraining
            </h2>
            <p className="mt-3 text-(--muted)">
              Wir melden uns innert 48 Stunden mit einem konkreten Termin. Du
              weisst immer, was als nächstes passiert.
            </p>
          </div>
          <div className="grid gap-4.5 min-[981px]:grid-cols-3">
            <article className="rounded-2xl border border-(--border) bg-[#f8fafc] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-(--deep)">
                1. Kurzes Formular
              </h3>
              <p>Trag Name, Kontakt und Position ein. Mehr brauchst du nicht.</p>
            </article>
            <article className="rounded-2xl border border-(--border) bg-[#eff6ff] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-(--deep)">
                2. Team-Zuordnung
              </h3>
              <p>
                Wir klären Level und Verfügbarkeit und schlagen dir das passende
                Team vor.
              </p>
            </article>
            <article className="rounded-2xl border border-(--border) bg-[#fff1f2] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-(--deep)">
                3. Probetraining
              </h3>
              <p>
                Du trainierst mit, lernst die Mannschaft kennen und entscheidest
                danach.
              </p>
            </article>
          </div>
          <a
            className="mt-4.5 inline-block border-b-2 border-b-[rgba(43,108,176,0.25)] font-bold text-(--deep) transition hover:-translate-y-0.5"
            href="/kontakt"
          >
            Jetzt Mitgliedschaft starten
          </a>
        </section>
        <section className="mt-14 rounded-[20px] border border-(--border) bg-(--panel) p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-(--orange)">
              Reputation
            </p>
            <h2 className="mt-1 font-display text-[clamp(1.5rem,3vw,1.75rem)] text-(--deep)">
              Wofür der Club steht
            </h2>
            <p className="mt-3 text-(--muted)">
              Leistung, Fairness und ein Team, das dich wirklich aufnimmt.
            </p>
          </div>
          <div className="grid gap-4.5 min-[981px]:grid-cols-2">
            <article className="rounded-2xl border border-(--border) bg-(--white) p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-(--deep)">
                Top 3 in der 2. Liga
              </h3>
              <p>
                Seit drei Jahren konstant in der Spitzengruppe mit eigener
                Nachwuchsförderung.
              </p>
            </article>
            <article className="rounded-2xl border border-(--border) bg-(--white) p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]">
              <h3 className="font-display text-[1.5rem] text-(--deep)">
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
