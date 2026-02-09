import { useContext, useState, useEffect, createContext } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const values = {
    cart,
    setCart,
  };

  useEffect(() => {
    const savedString = localStorage.getItem("audiophile-cart");
    if (savedString) {
      const parsedArray = JSON.parse(savedString);
      setCart(parsedArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("audiophile-cart", JSON.stringify(cart));
  }, [cart]);

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
