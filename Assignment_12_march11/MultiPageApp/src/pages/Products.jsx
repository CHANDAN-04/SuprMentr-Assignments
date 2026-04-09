import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const Products = () => {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      <h1>Products</h1>
      <select
        className="border px-4 py-2 rounded mb-4"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="mobile">Mobile</option>
        <option value="fashion">Fashion</option>
        <option value="electronics">Electronics</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
