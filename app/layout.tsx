import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, Bricolage_Grotesque } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const body = Atkinson_Hyperlegible_Next({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: "Hannah · German lessons",
  authors: [{ name: "Hannah" }],
  creator: "Hannah",
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hannah · German lessons in Abu Dhabi",
    title: site.title,
    description: site.description,
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#2f5fd0",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
