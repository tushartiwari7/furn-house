import axios from "axios";

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
