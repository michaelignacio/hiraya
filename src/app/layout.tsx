import type { Metadata } from "next";
import Image from "next/image";
import Link from 'next/link'
import { Inter } from "next/font/google";
import "./globals.css";

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
        <nav className="container mx-auto flex justify-center md:justify-between py-5">
          <Link href="/">
            <Image src="https://www.hiraya.com/wp-content/uploads/2015/07/hiraya_logo.jpg" width="323" height="60" alt="Hiraya logo" />
          </Link>
          <ul className="flex gap-5 items-center">
            <Link href="/about">About Us</Link>
            <Link href="/exhibitions">Exhibitions</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
