import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 dark:border-gray-600">
      <h3 className="text-lg font-bold dark:text-white">{product.name}</h3>
      <p className="text-pink-600 dark:text-pink-400 font-semibold">{product.price} THB</p>
      <div className="flex justify-between  items-end">
        <Link
        to={`/product/${product.id}`}
        className="mt-2 block text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm"
      >
        View Details →
      </Link>
      <button 
        onClick={() => addToCart(product)}
        className="mt-3 w-auto px-4 py-2 bg-black dark:bg-blue-600 text-white rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
        </div>
    </div>
  );
};

export default ProductCard;