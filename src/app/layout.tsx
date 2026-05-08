import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Volleyballclub Alpenstadt",
  description:
    "Volleyballclub Alpenstadt mit Spielplan, Resultaten, Rangliste und Kontakt für neue Mitglieder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${nunito.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
