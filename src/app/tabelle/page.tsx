import Topbar from "@/app/components/Topbar";

export default function TabellePage() {
  return (
    <div className="site-shell">
      <Topbar activeHref="/tabelle" />

      <main>
        <section className="content-section alt">
          <div className="section-head">
            <p className="section-label">Rangliste</p>
            <h1 className="page-title">Rangliste</h1>
            <p>Mobil gut lesbar. Ohne unnötiges Scrollen.</p>
          </div>

          <div className="table-wrap" role="region" aria-label="Rangliste">
            <table className="standings-table">
              <thead>
                <tr>
                  <th>Rang</th>
                  <th>Team</th>
                  <th>Punkte</th>
                  <th>Spiele</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>VC Luzern</td>
                  <td>24</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Alpenstadt</td>
                  <td>21</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Team West</td>
                  <td>18</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Club Nord</td>
                  <td>16</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
