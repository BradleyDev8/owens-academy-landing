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
  title: 'Owens Academy - Irish Dancing School',
  description: 'Join Owens Academy to learn authentic Irish dancing in a welcoming environment. Classes for all ages and skill levels.',
  keywords: 'Irish dancing, dance school, Irish dance classes, traditional dance, Owens Academy',
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