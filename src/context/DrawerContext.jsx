import { createContext, useState } from "react";

export const DrawerContext = createContext();

function DrawerProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;