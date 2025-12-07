import { Lato } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

type Props = {
  children: ReactNode;
};

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: Props) {
  return (
    <html className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
