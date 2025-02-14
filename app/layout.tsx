import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sage Fornshell",
  description: "Sales Professional @ Kansas State University",
  generator: "Next.js",
  keywords: [
    "Sage Fornshell",
    "Portfolio",
    "Sales",
    "Fornshell",
    "Bunzl",
    "Bunzl Sage",
    "Bunzl Fornshell",
    "Buzl Sage Fornshell",
  ], // Add keywords for SEO
  authors: [{ name: "Sage Fornshell" }], // Add author information
  openGraph: {
    title: "Sage Fornshell - Portfolio",
    description: "Sales Professional @ Kansas State University",
    url: "https://sagefornshell.com",
    siteName: "Sage Fornshell",
    images: [
      {
        url: "/Fornshell_Sage_Headshot-2.jpg", // Add an Open Graph image public/Fornshell_Sage_Headshot-2.jpg
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
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
      <body>{children}</body>
    </html>
  );
}

/*
export const metadata: Metadata = {
  title: 'Sage Fornshell - Portfolio',
  description: 'Sales Professional & Business Consultant',
  generator: 'Next.js',
  keywords: ['Sage Fornshell', 'Portfolio', 'Sales', 'Business Consultant'], // Add keywords for SEO
  authors: [{ name: 'Sage Fornshell' }], // Add author information
  openGraph: {
    title: 'Sage Fornshell - Portfolio',
    description: 'Sales Professional & Business Consultant',
    url: 'https://sagefornshell.com', // Replace with your domain
    siteName: 'Sage Fornshell',
    images: [
      {
        url: 'https://sagefornshell.com/og-image.jpg', // Add an Open Graph image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sage Fornshell - Portfolio',
    description: 'Sales Professional & Business Consultant',
    images: ['https://sagefornshell.com/twitter-image.jpg'], // Add a Twitter card image
  },
};*/
