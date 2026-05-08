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
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">VA</div>
        <div>
          <p className="eyebrow">Volleyballclub Alpenstadt</p>
          <p className="brand-sub">Spiele, Resultate, Mitgliedschaft</p>
        </div>
      </div>

      <nav className="nav">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={item.href === activeHref ? "is-active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
