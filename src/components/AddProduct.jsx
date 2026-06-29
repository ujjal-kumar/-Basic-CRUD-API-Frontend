import { useState } from "react"; 
 
function AddProduct({ addProduct }) { 
 
  const [product, setProduct] = useState({ 
    name: "", 
    price: "", 
    category: "" 
  }); 
 
  const handleChange = (e) => { 
    setProduct({ 
      ...product, 
      [e.target.name]: e.target.value 
    }); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
 
    addProduct(product); 
 
    setProduct({ 
      name: "", 
      price: "", 
      category: "" 
    }); 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
 
      <input 
        type="text" 
        name="name" 
        placeholder="Product Name" 
        value={product.name} 
        onChange={handleChange} 
      /> 
 
      <input 
        type="number" 
        name="price" 
        placeholder="Price" 
        value={product.price} 
        onChange={handleChange} 
      /> 
 
      <input 
        type="text" 
        name="category" 
        placeholder="Category" 
        value={product.category} 
        onChange={handleChange} 
      /> 
 
      <button type="submit"> 
        Add Product 
      </button> 
 
    </form> 
  ); 
} 
 
export default AddProduct; 