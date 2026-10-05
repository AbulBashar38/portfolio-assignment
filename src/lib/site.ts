/**
 * Absolute site URL for metadata, sitemap and structured data.
 * Set NEXT_PUBLIC_SITE_URL for a custom domain; on Vercel the production
 * URL is picked up automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** Hex equivalents of the theme background tokens (for browser chrome). */
export const themeColors = {
  light: "#f9f6f2",
  dark: "#100e0c",
};
