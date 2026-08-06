import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tree Removal & Pruning in DuPage County | Tri-County Tree Services",
  description:
    "ISA Certified arborists in DuPage County, IL. Free estimates, 24-hour emergency tree removal, expert pruning, crane and stump work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
