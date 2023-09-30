import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/HomePage.css";

const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false); // State for showing/hiding the toast

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to handle adding to cart and showing the toast
  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);

    // Hide the toast after 3 seconds (adjust the timeout as needed)
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="page-container">
      <div className="centered-heading">
        <h1>All Items</h1>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* Toast notification */}
      <div className={`toast-container ${showToast ? "toast-show" : ""}`}>
        Product added successfully
      </div>
    </div>
  );
};

export default HomePage;
