import axios from "axios";

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
