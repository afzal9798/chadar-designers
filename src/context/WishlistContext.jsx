import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  // Load wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem("chadar-wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  // Save wishlist whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "chadar-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // Add / Remove Wishlist
  const toggleWishlist = (product) => {
    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setWishlist(
        wishlist.filter(
          (item) => item.id !== product.id
        )
      );
    } else {
      setWishlist([
        ...wishlist,
        product,
      ]);
    }
  };

  // Remove directly from Wishlist
  const removeFromWishlist = (id) => {
    setWishlist(
      wishlist.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;