import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import { Providers } from '../redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={classNames(inter.className, 'bg-slate-800 text-gray-200')}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
