import axios from "axios";
const token = localStorage.getItem("token").slice(1, -1);

export const addToWishList = async (product) => {
  try {
    const { data, status } = await axios({
      method: "POST",
      url: `/api/user/wishlist`,
      headers: { authorization: token },
      data: { product },
    });
    return { wishlist: data.wishlist, status };
  } catch (err) {
    alert("Something went wrong: Add To Cart Failed");
    return err;
  }
};

export const deleteFromWishList = async (productId) => {
  try {
    const { data, status } = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${productId}`,
      headers: { authorization: token },
    });
    return { wishlist: data.wishlist, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
