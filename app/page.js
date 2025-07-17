import HomeSection1 from "./components/HomeSection1";
import HomeSection3 from "./components/HomeSection3";
import Banner from "./components/Banner";
import PopularCategories from "./components/PopularCategories";
import NewProducts from "./components/NewProducts";
import ConsultationSection from "./components/ConsultationSection";

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <HomeSection1 />
      <PopularCategories />
      <NewProducts />
      <HomeSection3 />
      <ConsultationSection />
    </div>
  );
}
