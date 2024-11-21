import React, { useState } from "react";
import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // id ის დახმარებით ავდარიდოთ თავი დადუპვას და გვქონდეს ერთი აითემი
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) return;
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header toggleCart={() => setIsCartOpen(!isCartOpen)} />
      <ProductGallery addToCart={addToCart} />
      <ShoppingCart
        isOpen={isCartOpen}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
