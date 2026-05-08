import Topbar from "@/app/components/Topbar";
import SiteFooter from "@/app/components/SiteFooter";

export default function Home() {
  return (
    <div className="site-shell">
      <Topbar activeHref="/" />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="section-label">Startseite</p>
            <h1>Spielinfos, Anmeldung, Teamgeist - alles auf einen Blick.</h1>
            <p className="lead">
              Du willst spielen? Hier findest du das nächste Match, die letzten
              Resultate und den schnellsten Weg zur Mitgliedschaft. Klar, direkt
              und mobil optimiert.
            </p>

            <div
              className="hero-facts two-cards"
              aria-label="Letztes Resultat und nächstes Spiel"
            >
              <article className="mini-card highlight">
                <p className="card-kicker">Letztes Resultat</p>
                <h3>Alpenstadt vs. VC Luzern 3:1</h3>
                <p>Sätze: 25:19, 22:25, 25:18, 25:21</p>
                <p className="result-meta">Sieg zuhause</p>
              </article>
              <article className="mini-card">
                <p className="card-kicker">Nächstes Spiel</p>
                <h3>Sa, 15:00 Uhr - Team West</h3>
                <p>Sporthalle A, Alpenstadt</p>
                <a className="text-link" href="/spielplan">
                  Anfahrt und Kalender
                </a>
              </article>
            </div>

            <div className="stats-row" aria-label="Club-Kennzahlen">
              <div className="stat-pill">
                <strong>40+</strong>
                <span>Aktive Spielerinnen und Spieler</span>
              </div>
              <div className="stat-pill">
                <strong>3 Teams</strong>
                <span>Von U16 bis 1. Team</span>
              </div>
              <div className="stat-pill">
                <strong>48h</strong>
                <span>Antwort auf Anfragen</span>
              </div>
            </div>

            <div className="cta-row">
              <a className="button button-primary" href="/kontakt">
                Mitgliedschaft starten
              </a>
              <a className="button button-secondary" href="/spielplan">
                Spielplan
              </a>
              <a className="button button-secondary" href="/resultate">
                Resultate
              </a>
            </div>

            <div className="quick-access" aria-label="Direktlinks">
              <a href="/spielplan">Spielplan</a>
              <a href="/resultate">Resultate</a>
              <a href="/tabelle">Rangliste</a>
            </div>
          </div>

          <figure className="hero-media">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F81%2F198481-050-10CED2D9%2FGilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.jpg&f=1&nofb=1&ipt=d333d6780063a470e4c18927fff94594ba72c04cc34f928a21c4546e16604dd9"
              alt="Libero in Abwehrhaltung beim Heimspiel in einer Halle."
            />
            <figcaption>Heimspiel-Moment aus der letzten Saison.</figcaption>
          </figure>
        </section>

        <section className="content-section">
          <div className="section-head">
            <p className="section-label">Anmeldung</p>
            <h2>In drei Schritten zum Probetraining</h2>
            <p>
              Wir melden uns innert 48 Stunden mit einem konkreten Termin. Du
              weisst immer, was als nächstes passiert.
            </p>
          </div>
          <div className="card-grid three-up">
            <article className="info-card accent sand">
              <h3>1. Kurzes Formular</h3>
              <p>Trag Name, Kontakt und Position ein. Mehr brauchst du nicht.</p>
            </article>
            <article className="info-card accent sky">
              <h3>2. Team-Zuordnung</h3>
              <p>
                Wir klären Level und Verfügbarkeit und schlagen dir das passende
                Team vor.
              </p>
            </article>
            <article className="info-card accent coral">
              <h3>3. Probetraining</h3>
              <p>
                Du trainierst mit, lernst die Mannschaft kennen und entscheidest
                danach.
              </p>
            </article>
          </div>
          <a className="text-link" href="/kontakt">
            Jetzt Mitgliedschaft starten
          </a>
        </section>

        <section className="content-section">
          <div className="section-head">
            <p className="section-label">News</p>
            <h2>Aktuell aus der Halle</h2>
            <p>Kurze Updates statt langer Texte. Das Wichtigste auf dem Handy.</p>
          </div>
          <div className="card-grid two-up">
            <article className="info-card">
              <h3>Saisonstart am 10. September</h3>
              <p>
                Das 1. Team startet zuhause gegen Team West. Einlauf mit der U16
                und Hallenmusik.
              </p>
            </article>
            <article className="info-card">
              <h3>Libero-Workshop mit Andrin Wirz</h3>
              <p>
                Offenes Training für Studierende am 5. Oktober. Fokus: Annahme
                und Feldverteidigung.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section">
          <div className="section-head">
            <p className="section-label">Reputation</p>
            <h2>Wofür der Club steht</h2>
            <p>Leistung, Fairness und ein Team, das dich wirklich aufnimmt.</p>
          </div>
          <div className="card-grid two-up">
            <article className="info-card">
              <h3>Top 3 in der 2. Liga</h3>
              <p>
                Seit drei Jahren konstant in der Spitzengruppe mit eigener
                Nachwuchsförderung.
              </p>
            </article>
            <article className="info-card">
              <h3>40+ aktive Spieler:innen</h3>
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
