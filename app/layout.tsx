import type {Metadata, Viewport} from 'next';
import { Playfair_Display, Lora, Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Reviewer ni Psyduck',
  description: 'A comprehensive, modern reviewer for college entrance tests by Psyduck.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Psyduck CET',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${inter.variable}`}>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-indigo-200" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
