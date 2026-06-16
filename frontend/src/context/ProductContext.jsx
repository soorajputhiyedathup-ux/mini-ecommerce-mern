import { createContext, useState } from "react";
import { getProducts, addProduct } from "../services/productService";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      console.log("API DATA:", data);

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (productData) => {
    try {
      await addProduct(productData);
      await fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        createProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;