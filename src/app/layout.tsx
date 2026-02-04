import { Bricolage_Grotesque, Montserrat } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

type Props = {
  children: ReactNode;
};

export const bricolage = Bricolage_Grotesque({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const montserrat = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: Props) {
  return (
    <html className={`${bricolage.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
