import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The collective root — Leadership that Unites",
  description:
    "A global perspective on business, sustainability, and human progress. Leadership philosophy, professional credibility, and global business vision.",
  keywords: [
    "The collective root",
    "leadership",
    "sustainability",
    "business strategy",
    "stakeholder capitalism",
    "empathetic leadership",
    "systems thinking",
    "ESG",
    "responsible innovation",
  ],
  openGraph: {
    title: "The collective root — Leadership that Unites",
    description:
      "A global perspective on business, sustainability, and human progress.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
