import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)}
      />

      <h3>{product.title}</h3>

      <div className={styles.price}>${product.price}</div>
      <div className={styles.rating}>⭐ {product.rating}</div>

      {/* Buttons */}
      <div className={styles.actions}>
        <button
          className={`${styles.btn} ${styles.cart}`}
          onClick={() => alert("Added to cart")}
        >
          Add Cart
        </button>

        <button
          className={`${styles.btn} ${styles.buy}`}
          onClick={() => alert("Proceed to buy")}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
