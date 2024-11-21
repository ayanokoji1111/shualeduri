import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({ isOpen, toggleCart, cartItems, removeFromCart }) => {
  return (
    isOpen && (
      <div className="shopping-cart">
        <button className="close-cart" onClick={toggleCart}>
          Close Cart
        </button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default ShoppingCart;
