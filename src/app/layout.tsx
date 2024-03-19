import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Molecules/Header";
import Footer from "./Components/Molecules/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JAMEVLY Commerce Adm",
  description:
    "This is the admin commerce app to set up your JAMEVLY commerce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
