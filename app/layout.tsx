import './globals.css';
import type { Metadata } from 'next';
import { Instrument_Sans, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from '@/components/ui/sonner';

const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Owens Academy - Irish Dancing School in Downpatrick',
  description:
    'Join Owens Academy to learn authentic Irish dancing in Downpatrick. Professional TCRG instruction, classes for all ages and levels. Competition training and performance opportunities.',
  keywords:
    'Irish dancing Downpatrick, Irish dance classes Northern Ireland, TCRG certified dance school, Irish dance competitions, traditional Irish dance, Owens Academy Downpatrick, Irish dancing lessons County Down',
  authors: [{ name: 'Chris' }],
  openGraph: {
    title: 'Owens Academy - Irish Dancing School in Downpatrick',
    description:
      'Learn authentic Irish dancing in Downpatrick with TCRG certified instruction. Classes for all ages and levels.',
    url: 'https://www.owensacademy.org',
    siteName: 'Owens Academy',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.owensacademy.org'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${instrumentSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
