import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@/components/analytics';
import { ErrorBoundaryWrapper } from '@/components/error-boundary-wrapper';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#4F46E5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "New Year's Ideas Generator | Fun Holiday Activities",
  description: "Generate creative and fun ideas for New Year's celebrations. Find activities for all budgets and difficulty levels.",
  keywords: "New Year ideas, holiday activities, celebration ideas, party planning",
  authors: [{ name: "Timur Isachenko", url: "https://github.com/timursaurus" }],
  creator: "Timur Isachenko",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ru_RU",
    siteName: "New Year's Ideas Generator",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "New Year's Ideas Generator",
    }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@timursaurus",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="/api" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundaryWrapper>
          {children}
        </ErrorBoundaryWrapper>
        <Analytics />
      </body>
    </html>
  );
}
