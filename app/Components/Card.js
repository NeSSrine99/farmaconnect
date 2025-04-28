import Link from "next/link";
import { MdOutlineAddShoppingCart, MdDiscount } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Favorite from "./Favorite";
import Button from "./Button";
import Rating from "./Rating";
import { useRouter } from "next/navigation";

export default function Card({
  id,
  marque = "Marque",
  nom = "Nome de Product",
  prix = "Prix",
  discount = "Prix",
  image = "/cardImgs/CetafilEcran.jpeg",
  nouveaux,
  rupture,
  reduction = null,
  Description,
  category,
}) {
  const router = useRouter();
  return (
    <>
      {/*Start List of cards */}
      <div className=" outline-2 outline-primary self-stretch relative rounded-2xl rounded-tr-2xl w-full max-w-72 min-w-48   flex flex-col justify-start items-start shadow-defaultCard   transition-all hover:scale-105 ease-in-out bg-white">
        <div className="relative w-full ">
          <Favorite className=" absolute top-2 right-4" />
          {reduction && (
            <Button
              variant="secondary"
              className="absolute top-0 left-0 flex items-center gap-2 rounded-bl-none"
            >
              <MdDiscount /> {reduction}%
            </Button>
          )}
          <img
            src={image}
            alt="Book 1"
            className=" self-stretch h-56 rounded-tl-2xl rounded-tr-2xl  w-full"
          />
          <Link href={`/categories/${id}`}>
            <Button
              className="self-stretch  absolute  bottom-0 flex items-center  justify-center gap-2 "
              variant="third"
            >
              <FaRegEye size={24} />
              Voir Plus
            </Button>
          </Link>
        </div>
        <div className="px-2 py-2 self-stretch">
          <div className=" text-left ">
            <h3 className=" text-neutral-400 text-sm font-semibold">
              {marque}
            </h3>
            <h2 className="self-stretch w-full text-black text-[16px] font-bold truncate ">
              {nom}{" "}
            </h2>
          </div>
          <div className="self-stretch flex flex-wrap justify-between items-center py-2">
            {/* اليسار */}
            <div className="text-left flex flex-col justify-start items-start gap-1">
              <p className="text-black text-sm font-medium">{nouveaux}</p>
              <p className="text-neutral-400 text-base font-medium">
                {rupture}
              </p>
            </div>

            {/* اليمين */}
            <div className="text-right flex flex-col justify-end items-end gap-1">
              <p className="text-neutral-400 text-sm line-through">
                {discount}
              </p>
              <p className="text-black text-[18px] font-bold">{prix}</p>
            </div>
          </div>
          <div className="py-2">
            <Rating />
          </div>

          <div className="flex gap-2 ">
            <Button className="self-stretch w-full flex items-center  justify-center gap-2">
              <MdOutlineAddShoppingCart />
              Ajouter
            </Button>
          </div>
        </div>
      </div>
      {/*End List of cards */}
    </>
  );
}
