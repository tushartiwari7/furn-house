import axios from "axios";

export const deleteFromWishList = async (productId) => {
  const token = localStorage.getItem("token").slice(1, -1);

  try {
    const { data, status } = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${productId}`,
      headers: { authorization: token },
    });
    console.log(data, status);
    return { wishlist: data.wishlist, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
