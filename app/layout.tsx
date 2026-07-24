import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = protocol + "://" + host;

  return {
    metadataBase: new URL(origin),
    title: { default: "Tri-County Tree Services | Certified Tree Care", template: "%s | Tri-County Tree Services" },
    description: "Certified, owner-led tree care for DuPage County, Illinois, including pruning, removal, inspections, crane services, and emergency response.",
    openGraph: {
      title: "Tri-County Tree Services",
      description: "Professional tree solutions, integrity first. Certified care for every branch of the job.",
      type: "website",
      images: [{ url: origin + "/og.png", width: 1536, height: 900, alt: "Tri-County Tree Services — Professional solutions, integrity first." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tri-County Tree Services",
      description: "Professional tree solutions, integrity first. Certified care for every branch of the job.",
      images: [origin + "/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
