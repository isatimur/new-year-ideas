import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { ErrorBoundaryWrapper } from '@/components/error-boundary-wrapper';
import { GeneratorStructuredData } from "./components/structured-data";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "New Year's Ideas Generator | Fun Holiday Activities & Games",
  description: "Generate creative New Year celebration ideas instantly! Find unique party games, family activities, and budget-friendly ways to celebrate. Available in English and Russian.",
  keywords: [
    "New Year ideas",
    "holiday activities",
    "New Year's Eve party",
    "celebration ideas",
    "party games",
    "family activities",
    "новогодние идеи",
    "праздничные игры",
    "новогодние развлечения",
    "идеи для праздника"
  ].join(", "),
  authors: [{
    name: "Timur Isachenko",
    url: "https://timurisa.com"
  }],
  creator: "Timur Isachenko",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ru_RU",
    siteName: "New Year's Ideas Generator",
    title: "Generate Fun New Year's Eve Ideas Instantly",
    description: "Find creative and unique ways to celebrate New Year's Eve! Interactive generator for party ideas, games, and activities.",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "New Year's Ideas Generator - Creative Party Activities",
    }],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@isatimur",
    site: "@isatimur",
    images: ["/twitter-image.jpg"],
  },
  manifest: "/manifest.json",
  alternates: {
    languages: {
      'en': '/',
      'ru': '/'
    },
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GA_ID,
  },
  category: "Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="/api" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <GeneratorStructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundaryWrapper>
          {children}
        </ErrorBoundaryWrapper>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
