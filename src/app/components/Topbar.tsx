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
    <header className="sticky top-4 z-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-(--border) bg-(--panel) px-5 py-4 shadow-[0_8px_20px_rgba(43,108,176,0.08)] max-[980px]:relative max-[980px]:grid max-[980px]:grid-cols-1">
      <Link
        href="/"
      >
        <div className="flex items-center gap-3.5">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-(--deep) font-display text-[18px] font-extrabold tracking-[0.02em] text-(--white)">
            VA
          </div>
          <div>
            <p className="m-0 text-xs font-bold uppercase tracking-[0.08em] text-(--orange)">
              Volleyballclub Alpenstadt
            </p>
            <p className="mt-1 text-sm text-(--muted)">
              Spiele, Resultate, Mitgliedschaft
            </p>
          </div>
        </div>
      </Link>


      <nav className="flex flex-wrap gap-4.5">
        {navItems.map((item) => {
          const isContact = item.href === "/kontakt";
          const isActive = item.href == activeHref;

          if (isContact) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "flex items-center gap-1.5 rounded-full bg-(--orange-dark) px-4 py-2 text-sm font-bold text-white shadow-[0_4px_12px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5"
                    : "flex items-center gap-1.5 rounded-full bg-(--orange) px-4 py-2 text-sm font-bold text-white shadow-[0_4px_12px_rgba(249,115,22,0.25)] transition hover:-translate-y-0.5 hover:bg-(--orange-dark) hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)]"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {item.label}
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive
                  ? "rounded-full bg-(--deep) px-3 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"
                  : "rounded-full px-3 py-2 text-sm font-bold text-(--deep) transition hover:-translate-y-0.5"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
