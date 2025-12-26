import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mother Vegetable - Natural Healing Products",
  description: "Discover the power of nature with our revolutionary products designed to restore balance and promote healing for all living beings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
