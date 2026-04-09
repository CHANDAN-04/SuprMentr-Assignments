import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div className="flex flex-col md:flex-row gap-10 p-10">
      <img src={product.image} className="w-80 rounded" />

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-600 mt-2">₹{product.price}</p>

        <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
