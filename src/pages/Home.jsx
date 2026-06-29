import { useEffect, useState } from "react";
import API from "../api";

import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";
import EditProduct from "../components/EditProduct";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (product) => {
    try {
      const response = await API.post("/", product);
      setProducts([...products, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
  };

  const updateProduct = async (product) => {
    try {
      const response = await API.put(`/${product._id}`, product);

      setProducts(
        products.map((p) =>
          p._id === product._id ? response.data : p
        )
      );

      setSelectedProduct(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Product Management System</h1>

      <AddProduct addProduct={addProduct} />

      <EditProduct
        selectedProduct={selectedProduct}
        updateProduct={updateProduct}
      />

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default Home;