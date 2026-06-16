import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductDetailsPage() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);

  const product = products.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-200">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-200 px-4 py-6 md:p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-64
            md:h-96
            object-cover
          "
        />

        {/* Content */}
        <div className="p-5 md:p-8">

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
            {product.name}
          </h1>

          <p className="text-2xl md:text-3xl text-green-600 font-bold mt-4">
            ₹{product.price}
          </p>

          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm md:text-base font-medium">
              {product.category}
            </span>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
              Description
            </h2>

            <p className="text-gray-700 leading-7 md:leading-8 text-base md:text-lg">
              {product.description}
            </p>
          </div>

          {/* Back Button */}
          <Link
            to="/products"
            className="
              inline-block
              mt-8
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            ← Back to Products
          </Link>

        </div>
      </div>

    </div>
  );
}

export default ProductDetailsPage;