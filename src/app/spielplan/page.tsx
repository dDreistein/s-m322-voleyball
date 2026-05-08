"use client";

import { useState } from "react";
import Topbar from "@/app/components/Topbar";

const scheduleItems = [
  {
    team: "1",
    label: "1. Team",
    time: "Sa, 15:00 Uhr",
    location: "Sporthalle A, Alpenstadt",
    opponent: "Team West",
  },
  {
    team: "2",
    label: "2. Team",
    time: "Mi, 19:30 Uhr",
    location: "Turnhalle Ost",
    opponent: "VC Nord",
  },
  {
    team: "junioren",
    label: "Junioren",
    time: "Fr, 18:00 Uhr",
    location: "Schulhalle Mitte",
    opponent: "Nachwuchs Bern",
  },
];

const filters = [
  { id: "all", label: "Alle Teams" },
  { id: "1", label: "1. Team" },
  { id: "2", label: "2. Team" },
  { id: "junioren", label: "Junioren" },
];

export default function SpielplanPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleItems = scheduleItems.filter(
    (item) => activeFilter === "all" || item.team === activeFilter,
  );

  return (
    <div className="site-shell">
      <Topbar activeHref="/spielplan" />

      <main>
        <section className="content-section">
          <div className="section-head">
            <p className="section-label">Spielplan</p>
            <h1 className="page-title">Kommende Spiele</h1>
            <p>
              Datum, Zeit, Ort und Gegner auf einen Blick. Filter, Anfahrt und
              Kalender sind direkt dabei.
            </p>
          </div>

          <div className="filter-row" role="tablist" aria-label="Filter nach Team">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-chip${
                  activeFilter === filter.id ? " is-active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="card-grid schedule-grid">
            {visibleItems.map((item) => (
              <article
                key={`${item.team}-${item.time}`}
                className="info-card schedule-card"
                data-team={item.team}
              >
                <p className="card-kicker">{item.label}</p>
                <h3>{item.time}</h3>
                <p>
                  <strong>Ort:</strong> {item.location}
                </p>
                <p>
                  <strong>Gegner:</strong> {item.opponent}
                </p>
                <div className="tags">
                  <span>Anfahrt</span>
                  <span>Kalender hinzufügen</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
