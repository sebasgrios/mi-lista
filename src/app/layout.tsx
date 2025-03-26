import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const nunitoFont = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lista",
  description: "Gestiona tu propia lista de manera sencilla.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunitoFont.className} antialiased`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
