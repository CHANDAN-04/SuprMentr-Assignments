import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={product.image} className="w-full h-40 object-cover rounded" />

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>

      <Link to={`/products/${product.id}`}>
        <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
