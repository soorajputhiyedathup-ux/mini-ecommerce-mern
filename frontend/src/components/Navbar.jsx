import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 gap-4">

          {/* Logo */}
          <Link
            to="/products"
            className="text-3xl font-bold text-cyan-300 self-center md:self-start"
          >
            🛒 MiniStore
          </Link>

          {/* Navigation */}
          <div className="flex gap-6 md:gap-8">

            <Link
              to="/products"
              className="text-lg font-medium text-white hover:text-cyan-300 transition"
            >
              Products
            </Link>

            <Link
              to="/add-product"
              className="text-lg font-medium text-white hover:text-cyan-300 transition"
            >
              Add Product
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;