import { useState, useEffect } from "react";

function EditProduct({ selectedProduct, updateProduct }) {
  const [product, setProduct] = useState(selectedProduct);

  useEffect(() => {
    setProduct(selectedProduct);
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>

      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        value={product.category}
        onChange={handleChange}
      />

      <button type="submit">Update Product</button>
    </form>
  );
}

export default EditProduct;