import type { Metadata } from "next";
import { Montserrat, Kaushan_Script, Playfair_Display } from "next/font/google";
import "./globals.css";

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kaushan",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
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
  title: "Hoàng A Muội - Portfolio",
  description: "Portfolio of Hoàng A Muội",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${kaushan.variable} ${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

