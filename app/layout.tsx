import type { Metadata } from "next";
import { Dosis, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Meta Diárias",
  description: "Gerencia agora seus Hábitos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${dosis.variable} ${inter.variable} flex items-center flex-col mt-10 bg-neutral-900`}>
        <Image
        src="/images/logoMeta.svg"
        width={200}
        height={200}
        alt="Logo - meta diária" />

        {children}
      </body>
    </html>
  );
}
