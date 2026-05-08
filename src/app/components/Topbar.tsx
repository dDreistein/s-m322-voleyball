import Link from "next/link";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/spielplan", label: "Spielplan" },
  { href: "/resultate", label: "Resultate" },
  { href: "/tabelle", label: "Rangliste" },
  { href: "/kontakt", label: "Verein & Kontakt" },
];

type TopbarProps = {
  activeHref: string;
};

export default function Topbar({ activeHref }: TopbarProps) {

  console.log(activeHref)
  return (
    <header className="sticky top-4 z-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] px-5 py-4 shadow-[0_8px_20px_rgba(43,108,176,0.08)] max-[980px]:relative max-[980px]:grid max-[980px]:grid-cols-1">
      <div className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--deep)] font-display text-[18px] font-extrabold tracking-[0.02em] text-[color:var(--white)]">
          VA
        </div>
        <div>
          <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-[color:var(--orange)]">
            Volleyballclub Alpenstadt
          </p>
          <p className="mt-1 text-sm text-[color:var(--muted)]">
            Spiele, Resultate, Mitgliedschaft
          </p>
        </div>
      </div>

      <nav className="flex flex-wrap gap-4.5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.href == activeHref
                ? "rounded-full bg-(--deep) px-3 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"
                : "rounded-full px-3 py-2 text-sm font-bold text-(--deep) transition hover:-translate-y-0.5"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
