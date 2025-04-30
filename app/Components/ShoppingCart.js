import CartItems from "./CartItems";

export default function ShoppingCart({ className = "" }) {
  return (
    <div className={`p-4 border-2 rounded  z-100 ${className}`}>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <p>hello there</p>
    </div>
  );
}
