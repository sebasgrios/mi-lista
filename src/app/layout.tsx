import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const nunitoFont = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple list",
  description: "Gestiona tu propia lista de manera sencilla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunitoFont.variable} antialiased`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
