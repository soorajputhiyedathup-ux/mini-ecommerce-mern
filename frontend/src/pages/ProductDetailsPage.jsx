import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ProductDetailsPage() {
  const { id } = useParams();

  const { products } = useContext(ProductContext);

  const product = products.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl"
        />

        <h1 className="text-4xl font-bold mt-6">
          {product.name}
        </h1>

        <p className="text-2xl text-green-600 font-bold mt-3">
          ₹{product.price}
        </p>

        <p className="text-gray-500 mt-3">
          Category: {product.category}
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-3">
            Description
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;