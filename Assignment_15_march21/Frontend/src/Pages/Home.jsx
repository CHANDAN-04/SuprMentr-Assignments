import { useEffect, useState } from "react";
import styles from "./Home.module.css";

import {
  getProducts,
  searchProducts,
  getCategories,
  getByCategory,
} from "../services/api";

import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";
import Navbar from "../components/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);

  const [limit] = useState(12);
  const [skip, setSkip] = useState(0);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const totalPages = Math.ceil(total / limit);
  const currentPage = skip / limit + 1;

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let data;

      if (search) {
        data = await searchProducts(search);
      } else if (category) {
        data = await getByCategory(category);
      } else {
        data = await getProducts({
          limit,
          skip,
          sortBy: sort,
          order: "asc",
        });
      }

      setProducts(data.products);
      setTotal(data.total || data.products.length);
    };

    const delay = setTimeout(fetchData, search ? 400 : 0);
    return () => clearTimeout(delay);
  }, [search, category, skip, sort]);

  return (
    <div className={styles.container}>
      <Navbar />

      <FilterPanel
        categories={categories}
        setSearch={setSearch}
        setCategory={setCategory}
        setSort={setSort}
      />

      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {!search && !category && (
        <div className={styles.pagination}>
          <button
            onClick={() => setSkip((s) => Math.max(s - limit, 0))}
            disabled={currentPage === 1}
          >
            ⬅
          </button>

          {Array.from({ length: totalPages })
            .slice(0, 5)
            .map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  className={currentPage === page ? styles.active : ""}
                  onClick={() => setSkip((page - 1) * limit)}
                >
                  {page}
                </button>
              );
            })}

          <button
            onClick={() => setSkip((s) => s + limit)}
            disabled={currentPage === totalPages}
          >
            ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
