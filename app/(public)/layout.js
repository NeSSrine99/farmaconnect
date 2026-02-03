import Header from "@shared/Header";
import Navbar from "@shared/Navigation";
import Footer from "@shared/Footer";
import { CartProvider } from "../context/CartContext";

export default function PublicLayout({ children }) {
  return (
    <CartProvider>
      <Header />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </CartProvider>
  );
}
