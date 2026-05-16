import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display-stack",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thebushgroupinc.com"),
  title: {
    default: "The Bush Group — Change Management, Facilitation & Leadership Consulting",
    template: "%s · The Bush Group",
  },
  description:
    "The Bush Group helps executives and teams plan strategically, manage change, and lead operations with confidence. Certified Master Facilitators, Prosci instructors, and Lean Six Sigma experts.",
  keywords: [
    "change management",
    "executive facilitation",
    "strategic planning",
    "Prosci",
    "Lean Six Sigma",
    "leadership consulting",
    "project management training",
    "Bush Group",
  ],
  authors: [{ name: "The Bush Group, Inc." }],
  openGraph: {
    type: "website",
    title: "The Bush Group — Change Management & Executive Facilitation",
    description:
      "Top-shelf, certified facilitators and change leaders helping organizations think clearly, align teams, and execute with confidence.",
    siteName: "The Bush Group",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bush Group",
    description:
      "Strategic facilitation, change management, and executive consulting.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "The Bush Group, Inc.",
              url: "https://thebushgroupinc.com",
              email: "info@thebushgroupinc.com",
              foundingDate: "2016",
              areaServed: "Worldwide",
              slogan: "Clarity. Alignment. Execution.",
              description:
                "Strategic facilitation, change management consulting, and executive leadership development.",
              knowsAbout: [
                "Change Management",
                "Strategic Planning",
                "Executive Facilitation",
                "Lean Six Sigma",
                "Project Management",
                "Coaching",
                "Prosci",
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "Steve Bush",
                  jobTitle: "Founder, CEO",
                  url: "https://thebushgroupinc.com/about/steve-bush",
                },
                {
                  "@type": "Person",
                  name: "Jessalynn Bush",
                  jobTitle: "Founder, VP Operations",
                  url: "https://thebushgroupinc.com/about/jessalynn-bush",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "Northern California",
                addressCountry: "US",
              },
            }),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
