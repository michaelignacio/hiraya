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
          <Link href="/exhibitions">
            <Image src="https://www.hiraya.com/wp-content/uploads/2015/07/hiraya_logo.jpg" width="323" height="60" alt="Hiraya logo" />
          </Link>
          <ul className="gap-5 items-center hidden md:flex">
            <Link href="/">About Us</Link>
            <Link href="/exhibitions">Exhibitions</Link>
          </ul>
        </nav>
        {children}
      </body>

      <ul className="gap-5 mt-10 flex justify-center">
        <Link className="underline" href="/">About Us</Link>
        <Link className="underline" href="/exhibitions">Exhibitions</Link>
      </ul>
      <p className="text-center mb-10 mt-5">© 2024 Hiraya Gallery. All Rights Reserved.</p>
    </html>
  );
}
