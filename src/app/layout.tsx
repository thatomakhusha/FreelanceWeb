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

  title: "Thato Makhusha | Web Developer",

  description:
    "Thato Makhusha is a freelance web developer based in Johannesburg, South Africa, building professional websites and web applications for businesses and professionals.",

  keywords: [
    "Thato Makhusha",
    "web developer",
    "front-end development",
    "front-end developer",
    "freelance web developer",
    "website developer",
    "web developer Johannesburg",
    "front-end developer Johannesburg",
    "web development South Africa",
    "website developer South Africa",
    "freelance web developer South Africa",
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
    title: "Thato Makhusha | Web Developer",
    description:
      "Freelance web developer based in Johannesburg, South Africa, building professional websites and web applications for businesses and professionals.",
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
