import styles from "./FilterPanel.module.css";

const FilterPanel = ({ categories, setSearch, setCategory, setSort }) => {
  return (
    <div className={styles.panel}>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="price">Price</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default FilterPanel;
