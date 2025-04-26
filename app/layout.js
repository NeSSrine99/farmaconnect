import {  Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins', // هنا تعرف متغير جديد
  weight: ['100', '200', '300', '400', '500', '600', '700','800','900'],
});

export const metadata = {
  title: "Farmaconnect",
  description: "site web static de pharmacie en ligne ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header />
        <main className="md:mx[50px] lg:mx-[100px] mx-[25px] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
