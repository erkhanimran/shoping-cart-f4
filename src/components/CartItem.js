import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
