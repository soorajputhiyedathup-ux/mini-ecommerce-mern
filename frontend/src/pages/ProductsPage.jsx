import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function ProductsPage() {
  const { products, fetchProducts } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  useEffect(() => {
    fetchProducts();
  }, []);

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sortOrder === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-200 px-4 py-6 md:px-8">

      {/* Search / Filter / Sort */}
      <div
        className="
          bg-white/90
          backdrop-blur-sm
          p-4 md:p-6
          rounded-3xl
          shadow-xl
          border
          border-gray-200
          mb-8
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search Products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="
              md:col-span-6
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              w-full
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="
              md:col-span-3
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              w-full
            "
          >
            <option value="All">All Categories</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
          </select>

          {/* Sort */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="
              md:col-span-3
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              w-full
            "
          >
            <option value="">Sort By Price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>

        </div>
      </div>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">

        <h2 className="text-2xl md:text-4xl font-bold text-slate-800">
          Products
        </h2>

        <span className="text-gray-700 font-medium">
          Total Products: {filteredProducts.length}
        </span>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="
              bg-white/95
              backdrop-blur-sm
              rounded-3xl
              shadow-lg
              overflow-hidden
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 md:h-56 object-cover"
            />

            <div className="p-5">

              <h3 className="text-lg md:text-xl font-bold text-slate-800">
                {product.name}
              </h3>

              <p className="text-green-600 text-2xl font-bold mt-2">
                ₹{product.price}
              </p>

              <p className="text-gray-500 mt-2">
                {product.category}
              </p>

              <Link
                to={`/product/${product._id}`}
                className="
                  mt-4
                  block
                  text-center
                  bg-blue-600
                  text-white
                  py-2.5
                  rounded-xl
                  hover:bg-blue-700
                  transition
                  font-medium
                "
              >
                View Product
              </Link>

            </div>
          </div>
        ))}

      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-3 mt-10">

        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev > 1 ? prev - 1 : prev
            )
          }
          className="
            bg-blue-600
            text-white
            px-4 md:px-5
            py-2
            rounded-xl
            hover:bg-blue-700
            transition
          "
        >
          Previous
        </button>

        <span className="font-semibold text-slate-700">
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < totalPages ? prev + 1 : prev
            )
          }
          className="
            bg-blue-600
            text-white
            px-4 md:px-5
            py-2
            rounded-xl
            hover:bg-blue-700
            transition
          "
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default ProductsPage;