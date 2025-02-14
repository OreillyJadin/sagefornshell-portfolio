import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sage Fornshell",
  description: "Sales Professional @ Kansas State University",
  generator: "Next.js",
  applicationName: "Sage Fornshell Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Sage Fornshell",
    "Portfolio",
    "Kansas State University",
    "Fornshell",
    "Bunzl",
    "Bunzl Sage",
    "Bunzl Fornshell",
    "Bunzl Sage Fornshell",
  ], // Add keywords for SEO
  authors: [{ name: "Sage Fornshell" }], // Add author information
  openGraph: {
    title: "Sage Fornshell",
    description: "Sales Professional @ Kansas State University",
    url: "https://sagefornshell.com",
    siteName: "Sage Fornshell",
    images: [
      {
        url: "/Fornshell_Sage_Headshot-2.jpg", // Add an Open Graph image public/Fornshell_Sage_Headshot-2.jpg
        width: 1200,
        height: 630,
        alt: "Sage Fornshell - Sales Professional & Business Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
