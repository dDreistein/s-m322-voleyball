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
    <div className="mx-auto max-w-[1240px] p-6 max-[640px]:p-3.5">
      <Topbar activeHref="/spielplan" />

      <main>
        <section className="mt-14 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--panel)] p-7 shadow-[0_10px_26px_rgba(43,108,176,0.08)]">
          <div className="mb-4.5">
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
              Spielplan
            </p>
            <h1 className="mt-2 font-display text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.1] text-[color:var(--deep)]">
              Kommende Spiele
            </h1>
            <p className="mt-3 text-[color:var(--muted)]">
              Datum, Zeit, Ort und Gegner auf einen Blick. Filter, Anfahrt und
              Kalender sind direkt dabei.
            </p>
          </div>

          <div
            className="mb-4.5 flex flex-wrap gap-2.5"
            role="tablist"
            aria-label="Filter nach Team"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`rounded-full border px-3.5 py-2 font-bold text-[color:var(--deep)] transition hover:-translate-y-0.5 ${
                  activeFilter === filter.id
                    ? "border-[color:var(--deep)] bg-[color:var(--deep)] text-[color:var(--white)]"
                    : "border-[color:var(--deep)] bg-[color:var(--white)] text-[color:var(--deep)]"
                }`}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-4.5 min-[981px]:grid-cols-3">
            {visibleItems.map((item) => (
              <article
                key={`${item.team}-${item.time}`}
                className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--white)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,95,107,0.1)]"
                data-team={item.team}
              >
                <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
                  {item.label}
                </p>
                <h3 className="mt-2 font-display text-[1.5rem] text-[color:var(--deep)]">
                  {item.time}
                </h3>
                <p>
                  <strong>Ort:</strong> {item.location}
                </p>
                <p>
                  <strong>Gegner:</strong> {item.opponent}
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  <span className="inline-flex min-h-[32px] items-center rounded-full bg-[rgba(99,179,237,0.18)] px-3.5 text-sm font-bold text-[color:var(--deep)]">
                    Anfahrt
                  </span>
                  <span className="inline-flex min-h-[32px] items-center rounded-full bg-[rgba(99,179,237,0.18)] px-3.5 text-sm font-bold text-[color:var(--deep)]">
                    Kalender hinzufügen
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
