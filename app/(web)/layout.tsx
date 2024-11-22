import { figtree, noto_serif_jp } from '@/fonts/fonts';

// import localFont from "next/font/local";
// app\styles\globals.css
import '../styles/globals.css';
import '../styles/typography.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import CanonicalLink from '@/components/canonical';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  openGraph: {
    siteName: 'MindMolt',
    type: 'website',
  },
  twitter: {
    site: '@MindMolt',
    creator: '@MindMolt',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={`${process.env.G_GTM_ID}`} />
      <head>
        <CanonicalLink />
      </head>
      <body
        className={`${figtree.variable} ${noto_serif_jp.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.G_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
      <GoogleAnalytics gaId={`${process.env.G_MEASUREMENT_ID}`} />
    </html>
  );
}
