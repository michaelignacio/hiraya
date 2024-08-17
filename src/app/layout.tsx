import type { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import MobileNav from './components/MobileNav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hiraya Gallery",
  description: "Founded in 1980",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="container mx-auto flex justify-center items-center md:justify-between py-5">
          <Link href="/exhibitions">
            <Image src="/images/hiraya-logo.jpg" width="323" height="60" alt="Hiraya logo" />
          </Link>
          <ul className="gap-5 items-center hidden md:flex">
            <Link className="underline text-gray-700" href="/">About Us</Link>
            <Link className="underline text-gray-700" href="/exhibitions">Exhibitions</Link>
          </ul>
          <MobileNav />
        </nav>
        {children}

        <nav className="mt-10">
          <ul className="gap-5 flex justify-center">
            <Link className="underline text-gray-700" href="/">About Us</Link>
            <Link className="underline text-gray-700" href="/exhibitions">Exhibitions</Link>
          </ul>
        </nav>
        <p className="text-center mb-10 mt-5 text-gray-700">© 2024 Hiraya Gallery. All Rights Reserved.</p>
        <Analytics />
      </body>
    </html>
  );
}
