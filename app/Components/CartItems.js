// import { useParams } from "next/navigation";
import { products } from "../categories/data";
import Button from "./Button";
import { GoTrash } from "react-icons/go";

export default function CartItems({ product, onRemove }) {
  //   const { id } = useParams();
  //   const product = products.find((item) => item.id === parseInt(id));

  //   if (!product) return <p> nothing</p>;
  if (!product) return null;

  return (
    <div className="flex items-center gap-4">
      <img
        src={product.image}
        alt="img"
        className="w-12 h-12 rounded-2xl border-2 border-textLight shadow-secondary "
      />
      <div>
        <p className="self-stretch justify-center text-neutral-400 text-xs font-semibold">
          {product.marque}{" "}
        </p>
        <p className="self-stretch justify-center text-black text-sm font-bold">
          {" "}
          {product.nom}{" "}
        </p>
      </div>
      <Button variant="third" onClick={onRemove}>
        <GoTrash size={24} />
      </Button>
    </div>
  );
}
