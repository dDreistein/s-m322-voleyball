import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-8 grid grid-cols-3 gap-4.5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] px-7 py-6 text-[0.95rem] max-[980px]:grid-cols-1">
      <div>
        <p className="mb-1 font-display font-bold text-[color:var(--deep)]">
          Volleyballclub Alpenstadt
        </p>
        <p>Hauptsitz: Hallenweg 8, 6000 Alpenstadt</p>
        <p>Telefon: 041 555 20 20 · info@vc-alpenstadt.ch</p>
      </div>
      <div className="grid gap-2">
        <Link href="/spielplan">Spielplan</Link>
        <Link href="/resultate">Resultate</Link>
        <Link href="/tabelle">Rangliste</Link>
        <Link href="/kontakt">Verein & Kontakt</Link>
      </div>
      <div className="grid gap-2">
        <span className="font-bold text-[color:var(--deep)]">Social</span>
        <a href="#">Instagram</a>
        <a href="#">WhatsApp</a>
        <a href="#">Impressum</a>
      </div>
    </footer>
  );
}
