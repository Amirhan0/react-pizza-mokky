import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [resultSum, setResultSum] = useState(0);
  return (
    <CartContext.Provider value={{ resultSum, setResultSum }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
