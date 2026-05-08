import Topbar from "@/app/components/Topbar";

export default function TabellePage() {
  return (
    <div className="mx-auto max-w-[1240px] p-6 max-[640px]:p-3.5">
      <Topbar activeHref="/tabelle" />

      <main>
        <section className="mt-14 rounded-[20px] border border-[color:var(--border)] bg-[#f8fafc] p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
              Rangliste
            </p>
            <h1 className="mt-2 font-display text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.1] text-[color:var(--deep)]">
              Rangliste
            </h1>
            <p className="mt-3 text-[color:var(--muted)]">
              Mobil gut lesbar. Ohne unnötiges Scrollen.
            </p>
          </div>

          <div className="overflow-x-auto" role="region" aria-label="Rangliste">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-[color:var(--border)] px-3 py-3.5 text-left text-[0.95rem] text-[color:var(--deep)]">
                    Rang
                  </th>
                  <th className="border-b border-[color:var(--border)] px-3 py-3.5 text-left text-[0.95rem] text-[color:var(--deep)]">
                    Team
                  </th>
                  <th className="border-b border-[color:var(--border)] px-3 py-3.5 text-left text-[0.95rem] text-[color:var(--deep)]">
                    Punkte
                  </th>
                  <th className="border-b border-[color:var(--border)] px-3 py-3.5 text-left text-[0.95rem] text-[color:var(--deep)]">
                    Spiele
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    1
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    VC Luzern
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    24
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    10
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    2
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    Alpenstadt
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    21
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    10
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    3
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    Team West
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    18
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    10
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    4
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    Club Nord
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    16
                  </td>
                  <td className="border-b border-[color:var(--border)] px-3 py-3.5">
                    10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
