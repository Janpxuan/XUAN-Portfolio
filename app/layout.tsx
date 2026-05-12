import type { Metadata } from "next";
import { contentTable } from "@/data/content-table";
import "./globals.css";

export const metadata: Metadata = {
  title: contentTable.seo.title,
  description: contentTable.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
