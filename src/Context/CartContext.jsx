import { useContext, useState, useEffect, createContext } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleCart = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const addToCart = (product, selectedQuantity) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + selectedQuantity }
            : item,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image.mobile,
          quantity: selectedQuantity,
          price: product.price,
        },
      ];
    });
  };

  const increase = (id) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  };
  const decrease = (id) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item,
      );
    });
  };
  const clear = () => {
    setCart([]);
  };
  const total = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  const shipping = 50;
  const vat = () => {
    return (20 / 100) * total();
  };

  const grandTotal = () => {
    return shipping + total();
  };

  const values = {
    cart,
    setCart,
    addToCart,
    increase,
    decrease,
    clear,

    modalIsOpen,
    toggleCart,
    total,
    shipping,
    vat,
    grandTotal,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
