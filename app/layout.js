import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navigation";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", // هنا تعرف متغير جديد
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Farmaconnect",
  description: "site web static de pharmacie en ligne ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <CartProvider>
          <Header />
          <Navbar />
          <main className="mx-4 ">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
