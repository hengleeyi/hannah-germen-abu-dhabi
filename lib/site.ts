/**
 * Site settings. Every value marked TODO is a placeholder that must be
 * replaced with Hannah's real details before the site goes live.
 */

export type PriceRow = {
  format: string;
  where: string;
  who: string;
  /** Price in AED per lesson. `null` shows "Ask Hannah" until a real price is set. */
  price: number | null;
  /** Optional lesson length, e.g. "60 min". Leave null until confirmed. */
  length: string | null;
  note?: string;
};

export const site = {
  name: "Hannah",
  title: "German Lessons in Abu Dhabi & Online | Hannah, Native German Teacher",
  description:
    "Private German lessons in Abu Dhabi or online with Hannah, a native speaker from Austria. Adults, children and teens, A1 to C2 and Goethe exam preparation.",

  // TODO: replace with the real domain, or set NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",

  // TODO: replace with Hannah's real email address.
  email: "hello@example.com",

  // TODO: replace with the real booking calendar link (Calendly or similar).
  bookingUrl: "https://calendly.com/your-link",

  currency: "AED",

  // TODO: fill in real prices (and lesson length if wanted).
  prices: [
    {
      format: "Online lesson",
      where: "Online",
      who: "Adults, children and teens",
      price: null,
      length: null,
    },
    {
      format: "In-person lesson",
      where: "Abu Dhabi",
      who: "Adults, children and teens",
      price: null,
      length: null,
    },
  ] satisfies PriceRow[],
} as const;

/**
 * Launch guard. Build with SITE_LIVE=1 for the real launch: the build then
 * fails while any placeholder above is still in place.
 */
if (process.env.SITE_LIVE === "1") {
  const missing: string[] = [];
  if (site.url.includes("example.com")) missing.push("url (or NEXT_PUBLIC_SITE_URL)");
  if (site.email.includes("example.com")) missing.push("email");
  if (site.bookingUrl.includes("your-link")) missing.push("bookingUrl");
  if (site.prices.some((p) => p.price === null)) missing.push("prices");
  if (missing.length > 0) {
    throw new Error(`lib/site.ts still has placeholders: ${missing.join(", ")}`);
  }
}
