import { axiosCall } from "../utils";
import toast from "react-hot-toast";

export const addToCart = async (product) => {
  try {
    const { data, status } = await axiosCall("/api/user/cart", "post", {
      product,
    });
    return { cart: data.cart, status };
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong: Add To Cart Failed");
    return err;
  }
};

export const deleteCartItem = async (productID) => {
  try {
    const { data, status } = await axiosCall(
      `/api/user/cart/${productID}`,
      "delete"
    );
    return { cart: data.cart, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const updateCartQty = async (productId, isIncrement = true) => {
  const action = { type: isIncrement ? "increment" : "decrement" };
  try {
    const { data, status } = await axiosCall(
      `/api/user/cart/${productId}`,
      "put",
      { action }
    );
    return { cart: data.cart, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
