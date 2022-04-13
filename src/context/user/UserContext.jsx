//react imports
import { createContext } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// ui utils
import toast from "react-hot-toast";
import { BsBag, BsFillHeartFill } from "react-icons/bs";

// data utils
import {
  addToCart,
  addToWishList,
  deleteCartItem,
  deleteFromWishList,
  updateCartQty,
} from "../../services";
import { useProducts } from "../";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false });
  const { setIsLoading } = useProducts();

  const navigator = useNavigate();
  /**
   * Demo User Schema after login:
   * {
      "_id": "15adeed5-070a-4ffd-828a-11c86a110d56",
      "firstName": "Adarsh",
      "lastName": "Balika",
      "email": "adarshbalika@gmail.com",
      "createdAt": "2022-03-19T11:29:18+05:30",
      "updatedAt": "2022-03-19T11:29:18+05:30",
      "cart": "[]",
      "wishlist": "[]",
      "id": "1",
      "isLoggedIn": true
    }
   */

  const cartHandler = async (product) => {
    const isInCart =
      user.isLoggedIn && user.cart.some((item) => item._id === product._id);

    if (!user.isLoggedIn) {
      toast("Please Login to add items to cart", { icon: <BsBag /> });
      return navigator("/login");
    }
    if (isInCart) {
      return navigator("/cart");
    }
    setIsLoading(true);
    const { cart } = await addToCart(product);
    toast.success("Item added to Cart");
    setUser((user) => ({ ...user, cart }));
    setIsLoading(false);
  };

  const updateQuantity = async (productId, type) => {
    setIsLoading(true);
    const { cart } = await updateCartQty(productId, type === "increment");
    toast.success(
      type === "increment"
        ? "Added 1 more item to Cart"
        : "Removed 1 item from Cart"
    );
    setUser((user) => ({ ...user, cart }));
    setIsLoading(false);
  };

  const removeFromCart = async (productId) => {
    setIsLoading(true);
    const { cart } = await deleteCartItem(productId);
    toast.success("Item removed from Cart");
    setUser((user) => ({ ...user, cart }));
    setIsLoading(false);
  };

  const addToWishListHandler = async (product) => {
    if (!user.isLoggedIn) {
      toast("Please Login to add items to Wishlist", {
        icon: <BsFillHeartFill color="red" />,
      });
      return navigator("/login");
    }
    setIsLoading(true);
    const { wishlist } = await addToWishList(product);
    toast.success("Item added to Wishlist");
    setUser((user) => ({ ...user, wishlist }));
    setIsLoading(false);
  };

  const deleteFromWishListHandler = async (productId) => {
    setIsLoading(true);
    const { wishlist } = await deleteFromWishList(productId);
    toast.success("Item removed from Wishlist");
    setUser((user) => ({ ...user, wishlist }));
    setIsLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        cartHandler,
        updateQuantity,
        removeFromCart,
        addToWishListHandler,
        deleteFromWishListHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
