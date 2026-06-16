import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function AddProductPage() {
  const navigate = useNavigate();
  const { createProduct } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProduct(formData);

    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-200 px-4 py-6 md:p-8 flex justify-center items-center">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white p-5 md:p-7">
          <h1 className="text-2xl md:text-4xl font-bold">
            Add New Product 🛒
          </h1>

          <p className="mt-2 text-sm md:text-base text-gray-200">
            Create a new product for your store
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 md:p-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full
              border
              border-gray-300
              p-3
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="
              w-full
              border
              border-gray-300
              p-3
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="
              w-full
              border
              border-gray-300
              p-3
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            required
          >
            <option value="">Select Category</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
          </select>

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="
              w-full
              border
              border-gray-300
              p-3
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

          {/* Image Preview */}
          {formData.image && (
            <div>
              <p className="font-semibold text-slate-700 mb-2">
                Product Image Preview
              </p>

              <img
                src={formData.image}
                alt="Preview"
                className="
                  w-full
                  h-48
                  md:h-72
                  object-cover
                  rounded-2xl
                  border
                  shadow-md
                "
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="
              w-full
              border
              border-gray-300
              p-3
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            required
          />

          <button
            type="submit"
            className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
              shadow-lg
            "
          >
            Add Product
          </button>
        </form>

      </div>
    </div>
  );
}

export default AddProductPage;