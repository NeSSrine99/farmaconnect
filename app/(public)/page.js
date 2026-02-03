import Banner from "@shared/Banner";
import ConsultationSection from "@shared/ConsultationSection";
import HomeSection1 from "@shared/HomeSection1";
import HomeSection3 from "@shared/HomeSection3";
import NewProducts from "@shared/NewProducts";
import PopularCategories from "@shared/PopularCategories";

export default function Home() {
  return (
    <div>
      <Banner />
      <HomeSection1 />
      <PopularCategories />
      <NewProducts />
      <HomeSection3 />
      <ConsultationSection />
    </div>
  );
}
