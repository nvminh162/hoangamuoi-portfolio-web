import type { Metadata } from "next";
import { Roboto, Kaushan_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kaushan",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: "900",
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOANG A MUOI - Portfolio",
  description: "Portfolio of HOANG A MUOI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kaushan.variable} ${roboto.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

