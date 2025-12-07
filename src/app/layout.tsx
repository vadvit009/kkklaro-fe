import { Lato } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

type Props = {
  children: ReactNode;
  params?: { locale?: string };
};

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children, params }: Props) {
  const locale = params?.locale || "en";
  return (
    <html lang={locale} className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
