import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
