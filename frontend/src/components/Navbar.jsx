import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-xl">
      <div className="w-full px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/products"
          className="text-3xl font-bold text-cyan-400"
        >
          🛒 MiniStore
        </Link>

        {/* Navigation */}
        <div className="flex gap-8 items-center">

          <Link
            to="/products"
            className="
              text-lg
              font-medium
              text-white
              hover:text-cyan-400
              transition
            "
          >
            Products
          </Link>

          <Link
            to="/add-product"
            className="
              text-lg
              font-medium
              text-white
              hover:text-cyan-400
              transition
            "
          >
            Add Product
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;