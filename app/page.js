import Image from "next/image";
import { AiFillAlipaySquare } from "react-icons/ai";
import Stars from "./Components/Rating";
import Rating from "./Components/Rating";
import Favorite from "./Components/Favorite";
import Button from "./Components/Button";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      
      <Rating />
      <Favorite />
      <Button variant="secondary"> hello</Button> 
    </div>
  );
}
