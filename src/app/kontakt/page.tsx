import Topbar from "@/app/components/Topbar";

export default function KontaktPage() {
  return (
    <div className="site-shell">
      <Topbar activeHref="/kontakt" />

      <main>
        <section className="content-section alt">
          <div className="section-head">
            <p className="section-label">Verein & Kontakt</p>
            <h1 className="page-title">Trainingszeiten, Teamübersicht und Kontakt</h1>
            <p>Alles Wichtige rund um den Club. Inklusive Mitgliedschaft und direktem Kontakt.</p>
          </div>

          <div className="contact-grid">
            <article className="info-card">
              <p className="card-kicker">Trainingszeiten</p>
              <h3>Wo und wann?</h3>
              <p>Montag und Donnerstag, 19:00 Uhr. Sporthalle A.</p>
              <p>Freitag: Nachwuchs, 18:00 Uhr. Schulhalle Mitte.</p>
              <p>Samstag: Match-Review, 10:00 Uhr. Clubraum.</p>
            </article>

            <article className="info-card map-card">
              <p className="card-kicker">Ort</p>
              <h3>Halle auf der Karte</h3>
              <div className="map-placeholder">
                <span>Anfahrt</span>
              </div>
              <p className="contact-note">Hallenweg 8, 6000 Alpenstadt</p>
            </article>
          </div>

          <div className="team-overview">
            <article className="mini-card">
              <p className="card-kicker">Teamübersicht</p>
              <h3>1. Team, 2. Team, Junioren</h3>
              <p>1. Team (2. Liga), 2. Team (3. Liga) und U16. Wir helfen dir bei der Einordnung.</p>
            </article>

            <article className="mini-card">
              <p className="card-kicker">Kontakt</p>
              <h3>Ansprechpersonen</h3>
              <p>Präsidium: Alina Fischer · sport@vc-alpenstadt.ch</p>
              <p>Mitgliedschaft: Bela Paavo Müller · mitglied@vc-alpenstadt.ch</p>
            </article>
          </div>

          <form className="signup-card">
            <label>
              <span>Name</span>
              <input type="text" placeholder="Vorname Nachname" />
            </label>
            <label>
              <span>E-Mail</span>
              <input type="email" placeholder="name@mail.ch" />
            </label>
            <label>
              <span>Position / Level</span>
              <input type="text" placeholder="z. B. Libero, Mittelblock, Einsteiger" />
            </label>
            <label>
              <span>Nachricht</span>
              <textarea rows={4} placeholder="Ich möchte am Probetraining teilnehmen."></textarea>
            </label>
            <div className="cta-row form-actions">
              <button type="button" className="button button-primary">
                Absenden
              </button>
            </div>
          </form>

          <div className="sponsor-grid" style={{ marginTop: "18px" }}>
            <div className="sponsor-logo">Sporthaus Koller</div>
            <div className="sponsor-logo">Bäckerei Sonnenplatz</div>
            <div className="sponsor-logo">Physio am See</div>
            <div className="sponsor-logo">Stadtwerke Alpenstadt</div>
          </div>
        </section>
      </main>
    </div>
  );
}
