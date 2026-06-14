import "./globals.css";
import Header from "@/layout/components/Header";

import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}