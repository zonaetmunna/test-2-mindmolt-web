import { Figtree, Noto_Serif_JP } from 'next/font/google';

export const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const noto_serif_jp = Noto_Serif_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto_serif_jp',
  weight: ['400', '500', '600', '700'],
});
