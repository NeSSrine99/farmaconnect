import Highlights from "./components/Highlights";
import ProductList from "./components/ProductList";
import CallToAction from "./components/CallToAction";
import VenteFlashBanner from "./components/Banner";

export const metadata = {
  title: "Vente Flash - Farmaconnect",
  description: "Découvrez nos offres exclusives de vente flash.",
};

export default function VenteFlash() {
  return (
    <div className="py-[100px] lg:px-[120px] sm:px-[32px] px-4 w-full">
      <VenteFlashBanner />
      <Highlights />
      <ProductList />
      <CallToAction />
    </div>
  );
}
