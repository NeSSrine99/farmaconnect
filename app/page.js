import HomeSection1 from "./components/HomeSection1";
import HomeSection3 from "./components/HomeSection3";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className=" py-4">
      <Banner />
      <HomeSection1 />
      <HomeSection3 />
    </div>
  );
}
