import { axiosCall } from "../utils";

export const addToWishList = async (product) => {
  try {
    const { data, status } = await axiosCall("/api/user/wishlist", "post", {
      product,
    });
    return { wishlist: data.wishlist, status };
  } catch (err) {
    return err;
  }
};

export const deleteFromWishList = async (productId) => {
  try {
    const { data, status } = await axiosCall(
      `/api/user/wishlist/${productId}`,
      "delete"
    );
    return { wishlist: data.wishlist, status };
  } catch (error) {
    console.error(error);
    return error;
  }
};
