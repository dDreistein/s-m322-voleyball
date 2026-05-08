import Topbar from "@/app/components/Topbar";

export default function ResultatePage() {
  return (
    <div className="site-shell">
      <Topbar activeHref="/resultate" />

      <main>
        <section className="content-section">
          <div className="section-head">
            <p className="section-label">Resultate</p>
            <h1 className="page-title">Letzte Spiele</h1>
            <p>Satzresultate, Sieg oder Niederlage und schnelle Links zum Teilen.</p>
          </div>

          <div className="card-grid results-grid">
            <article className="info-card result-card win">
              <p className="card-kicker">Sieg</p>
              <h3>Alpenstadt vs. Team West</h3>
              <p className="result-scores">25:19 | 22:25 | 25:18 | 25:21</p>
              <p className="result-badge">3:1 - Heimspiel</p>
              <p>Starkes Comeback nach Satz 1. Service-Druck von Position 1.</p>
              <div className="share-row">
                <a href="#" className="share-button">
                  WhatsApp
                </a>
                <a href="#" className="share-button">
                  Instagram
                </a>
              </div>
            </article>

            <article className="info-card result-card loss">
              <p className="card-kicker">Niederlage</p>
              <h3>Alpenstadt vs. Club Nord</h3>
              <p className="result-scores">23:25 | 25:21 | 21:25 | 24:26</p>
              <p className="result-badge">1:3 - Auswärts</p>
              <p>Knappe Partie. Gute Entwicklung im Angriff, Annahme stabilisiert.</p>
              <div className="share-row">
                <a href="#" className="share-button">
                  WhatsApp
                </a>
                <a href="#" className="share-button">
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
