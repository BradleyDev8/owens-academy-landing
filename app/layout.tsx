import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Caveat } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['400', '500', '700']
});
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat'
});

export const metadata: Metadata = {
  title: 'Owens Academy - Irish Dancing School in Downpatrick',
  description: 'Join Owens Academy to learn authentic Irish dancing in Downpatrick. Professional TCRG instruction, classes for all ages and levels. Competition training and performance opportunities.',
  keywords: 'Irish dancing Downpatrick, Irish dance classes Northern Ireland, TCRG certified dance school, Irish dance competitions, traditional Irish dance, Owens Academy Downpatrick, Irish dancing lessons County Down',
  authors: [{ name: 'Chris' }],
  openGraph: {
    title: 'Owens Academy - Irish Dancing School in Downpatrick',
    description: 'Learn authentic Irish dancing in Downpatrick with TCRG certified instruction. Classes for all ages and levels.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${playfair.variable} ${caveat.variable} font-sans antialiased`}>
          {children}
          <Toaster />
          <Analytics />
      </body>
    </html>
  );
}