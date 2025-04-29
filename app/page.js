import ChatbotComponent from "./components/Chatboot";
import HomeSection1 from "./components/HomeSection1";
import HomeSection3 from "./components/HomeSection3";
import Navbar from "./components/Navigation";

export default function Home() {
  return (
    <div className=" mt-10">
      {/* <ChatbotComponent /> */}
      <HomeSection1 />
      <HomeSection3 />
    </div>
  );
}
