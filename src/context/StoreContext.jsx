import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // add item
  const addToCart = (itemId) => {
    console.log(itemId);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // আগের মান থাকলে 1 যোগ হবে, না থাকলে নতুন 1 হবে
    }));
  };

  // remove item
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // যদি না থাকে তাহলে state change করবে না

      const updated = { ...prev };
      if (updated[itemId] === 1) {
        delete updated[itemId]; // যদি 1 হয় তাহলে item key ডিলিট করবে
      } else {
        updated[itemId] -= 1; // নাহলে শুধু count কমাবে
      }
      return updated;
    });
  };

  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
