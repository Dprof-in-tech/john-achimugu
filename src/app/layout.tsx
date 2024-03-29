import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const inter = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOHN ACHIMUGU | Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
