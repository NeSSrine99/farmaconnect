import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navigation";

import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "./context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Farmaconnect",
  description: "site web static de pharmacie en ligne ",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={`${poppins.variable} antialiased`}>
          <CartProvider>
            <Header />
            <Navbar />
            <main className="">
              {children}
              <Toaster position="top-right" />
            </main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
