import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import ProductList from "./components/ProductList";
import CallToAction from "./components/CallToAction";

export default function VenteFlash() {
  return (
    <div className="w-full">
      <HeroSection />
      <Highlights />
      <ProductList />
      <CallToAction />
    </div>
  );
}
