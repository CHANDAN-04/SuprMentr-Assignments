import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <h1 className="text-xl font-bold">ShopX</h1>

      <div className="flex gap-6">
        <NavLink to="/" className="hover:text-yellow-400">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:text-yellow-400">
          Products
        </NavLink>
        <NavLink to="/cart" className="hover:text-yellow-400">
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
