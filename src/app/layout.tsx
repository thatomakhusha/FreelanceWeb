import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["200"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freelance-web-eta.vercel.app"),

  title: "Thato Makhusha | Software Engineering Student & Web Developer",

  description:
    "Thato Makhusha is a Software Engineering student and freelance web designer and developer based in Johannesburg, South Africa, building professional websites and web applications for businesses and professionals.",

  keywords: [
    "Thato Makhusha",
    "Software Engineering student",
    "software engineering",
    "software developer",
    "web developer",
    "web designer",
    "freelance web developer",
    "freelance web designer",
    "web developer Johannesburg",
    "software developer Johannesburg",
    "web development South Africa",
    "software engineering South Africa",
  ],

  authors: [{ name: "Thato Makhusha" }],

  creator: "Thato Makhusha",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://freelance-web-eta.vercel.app/",
  },

  openGraph: {
    title: "Thato Makhusha | Software Engineering Student & Web Developer",
    description:
      "Software Engineering student and freelance web designer and developer based in Johannesburg, South Africa. Building professional websites and web applications for businesses and professionals.",
    url: "https://freelance-web-eta.vercel.app/",
    siteName: "Thato Makhusha",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}
