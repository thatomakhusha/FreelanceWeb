import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thato Makhusha | Web Designer & Developer",
  description:
    "Professional websites and web applications designed and developed by Thato Makhusha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}