import axios from "axios";
export const addToWishList = async (product) => {
  const token = localStorage.getItem("token").slice(1, -1);
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
