import type { Metadata } from 'next';
import { Roboto, Quicksand, Raleway, Montserrat } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ["latin"] });

const sand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sand',
});

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const rale = Raleway({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Cowboy - Electric Bike',
  description: 'Electric Bike For Urban Riders',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${rale.variable} ${sand.variable} ${roboto.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
