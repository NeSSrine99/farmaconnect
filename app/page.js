import HomeSection1 from "./components/HomeSection1";
import HomeSection3 from "./components/HomeSection3";
import Banner from "./components/Banner";
import PopularCategories from "./components/PopularCategories";
import NewProducts from "./components/NewProducts";

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <PopularCategories />
      <HomeSection1 />
      <NewProducts />
      <HomeSection3 />
    </div>
  );
}
