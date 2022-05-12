import axios from "axios";

export const addToCart = async (product) => {
  const token = localStorage.getItem("token")?.slice(1, -1);
  try {
    const { data, status } = await axios({
      method: "POST",
      url: `/api/user/cart`,
      headers: { authorization: token },
      data: { product },
    });
    return { cart: data.cart, status };
  } catch (err) {
    alert("Something went wrong: Add To Cart Failed");
    return err;
  }
};

export const deleteCartItem = async (productID) => {
  const token = localStorage.getItem("token").slice(1, -1);

  try {
    const { data, status } = await axios({
      method: "DELETE",
      url: `/api/user/cart/${productID}`,
      headers: { authorization: token },
    });
    return { cart: data.cart, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const updateCartQty = async (productId, isIncrement = true) => {
  const token = localStorage.getItem("token").slice(1, -1);
  const action = { type: isIncrement ? "increment" : "decrement" };
  try {
    const { data, status } = await axios({
      method: "POST",
      url: `/api/user/cart/${productId}`,
      headers: { authorization: token },
      data: { action },
    });
    return { cart: data.cart, status };
  } catch (error) {
    console.error(err);
    return err;
  }
};
