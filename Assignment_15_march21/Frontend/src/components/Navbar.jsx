import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>NeoStore</h1>

      <div className={styles.links}>
        <span>Home</span>
        <span>Products</span>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default Navbar;
