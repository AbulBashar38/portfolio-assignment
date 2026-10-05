import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Grain } from "@/components/layout/grain";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { profile } from "@/data/profile";
import { siteUrl, themeColors } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = `${profile.name} — ${profile.role}`;
const xHandle = profile.socials.find(
  (social) => social.platform === "x",
)?.handle;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.summary,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Frontend Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Dhaka",
    "Bangladesh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.summary,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.summary,
    creator: xHandle,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColors.light },
    { media: "(prefers-color-scheme: dark)", color: themeColors.dark },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            <a
              href="#content"
              className="sr-only rounded-md bg-foreground text-sm text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-2"
            >
              Skip to content
            </a>
            <Navbar />
            {children}
            <Footer />
            <Grain />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
