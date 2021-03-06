//react imports
import { createContext, useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
} from "services";

import { useProducts } from "context";
import { addAddress, deleteAddress, updateAddress, updateUser } from "services";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false });
  const { setIsLoading } = useProducts();

  const navigator = useNavigate();
  const location = useLocation();
  const cartHandler = async (product) => {
    const isInCart =
      user.isLoggedIn && user.cart.some((item) => item._id === product._id);

    if (!user.isLoggedIn) {
      toast("Please Login to add items to cart", { icon: <BsBag /> });
      return navigator("/login", { state: { from: location } });
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
      return navigator("/login", { state: { from: location } });
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

  const addAddressHandler = async (address) => {
    setIsLoading(true);
    const { addresses } = await addAddress(address);
    toast.success("Address added");
    setUser((user) => ({ ...user, addresses }));
    setIsLoading(false);
  };

  const deleteAddressHandler = async (addressId) => {
    setIsLoading(true);
    const { addresses } = await deleteAddress(addressId);
    toast.success("Address removed");
    setUser((user) => ({ ...user, addresses }));
    setIsLoading(false);
  };

  const updateAddressHandler = async (address) => {
    setIsLoading(true);
    const { addresses } = await updateAddress(address);
    toast.success("Address updated");
    setUser((user) => ({ ...user, addresses }));
    setIsLoading(false);
  };

  const updateUserHandler = async (userDetails) => {
    setIsLoading(true);
    const { updatedUser, encodedToken } = await updateUser(userDetails);
    localStorage.setItem("token", encodedToken);
    toast.success("User updated");
    setUser((user) => ({ ...user, ...updatedUser }));
    setIsLoading(false);
  };

  const shareItem = (productId, e) => {
    e.stopPropagation();
    toast.success("Copied Link to Clipboard");
    window.navigator.clipboard.writeText(
      `${window.location.origin}/products/${productId}`
    );
  };

  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateUserHandler,
        cartHandler,
        updateQuantity,
        removeFromCart,
        addToWishListHandler,
        deleteFromWishListHandler,
        addAddressHandler,
        deleteAddressHandler,
        updateAddressHandler,
        shareItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
