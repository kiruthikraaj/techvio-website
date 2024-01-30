import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "@/app/ui/globals.css";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techvio - IT Solutions & Business Services",
  description: "Techvio - IT Solutions & Business Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  );
}
