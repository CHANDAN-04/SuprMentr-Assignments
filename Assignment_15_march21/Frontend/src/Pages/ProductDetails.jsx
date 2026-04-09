import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <img src={product.thumbnail} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
    </div>
  );
};

export default ProductDetails;
