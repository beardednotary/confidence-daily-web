import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Confidence Daily — Build unshakeable confidence, one day at a time',
  description: 'A daily practice app for building real confidence — social, professional, and personal. Free daily practices plus structured 8-week paths.',
  metadataBase: new URL('https://confidencedaily.app'),
  openGraph: {
    title: 'Confidence Daily',
    description: 'Build unshakeable confidence, one day at a time.',
    url: 'https://confidencedaily.app',
    siteName: 'Confidence Daily',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Confidence Daily App',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confidence Daily',
    description: 'Build unshakeable confidence, one day at a time.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9SD850SBKK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9SD850SBKK');
          `}
        </Script>
      </body>
    </html>
  );
}
