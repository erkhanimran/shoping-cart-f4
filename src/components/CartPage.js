import React from "react";
import "../styles/CartPage.css";

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page">
      <div className="centered-heading">
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="checkout">
        <h4 style={{ color: "white" }}>Checkout Items</h4>
        {cart.map((item) => (
          <ul>
            <p>
              {item.title}
              {item.price}
            </p>
          </ul>
        ))}
        <button onClick={() => alert("This functionality is not added")}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
