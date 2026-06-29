function ProductList({ products, deleteProduct, editProduct }) {
  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <p>Category: {product.category}</p>

          <button onClick={() => editProduct(product)}>
            Edit
          </button>

          <button onClick={() => deleteProduct(product._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;