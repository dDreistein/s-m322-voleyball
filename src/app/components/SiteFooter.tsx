import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">Volleyballclub Alpenstadt</p>
        <p>Hauptsitz: Hallenweg 8, 6000 Alpenstadt</p>
        <p>Telefon: 041 555 20 20 · info@vc-alpenstadt.ch</p>
      </div>
      <div className="footer-links">
        <Link href="/spielplan">Spielplan</Link>
        <Link href="/resultate">Resultate</Link>
        <Link href="/tabelle">Rangliste</Link>
        <Link href="/kontakt">Verein & Kontakt</Link>
      </div>
      <div className="footer-links">
        <span className="footer-label">Social</span>
        <a href="#">Instagram</a>
        <a href="#">WhatsApp</a>
        <a href="#">Impressum</a>
      </div>
    </footer>
  );
}
