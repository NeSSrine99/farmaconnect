import CartItems from "./components/CartItems";
import ChatbotComponent from "./components/Chatboot";
import HomeSection1 from "./components/HomeSection1";
import HomeSection3 from "./components/HomeSection3";
import Navbar from "./components/Navigation";
import ShoppingCart from "./components/ShoppingCart";

export default function Home() {
  return (
    <div className=" mt-10 mb-10">
      <HomeSection1 />
      <HomeSection3 />
      <CartItems
        product={{
          id: 1,
          marque: "Cetaphil",
          nom: "Cetaphil Sun SPF 50+",
          prix: "79.99 TND",
          discount: "99.99 TND",
          image:
            "https://www.parashop.tn/image/cache/catalog/produits/cetaphil/cetaphil-sun-light-gel-spf50-320x320.jpg.webp",
          nouveaux: "Nouveau",
          rupture: "En stock",
          reduction: 20,
          Description:
            "Gel solaire léger avec aloe vera et vitamine E, protège contre les rayons UV et hydrate intensément.",
          category: "Beauté Soins",
        }}
      />
    </div>
  );
}
