import axios from "axios";
export const addToCart = async (product) => {
    const token = localStorage.getItem("token").slice(1,-1);
    try {
      const {data,status} = await axios({
        method: "POST",
        url: `/api/user/cart`,
        headers: {'authorization': token},
        data: {product}
      });
      console.log(data,status);
      return {cart: data.cart,status};
    }
    catch(err) {
      console.log(err);
      alert("Something went wrong: Add To Cart Failed");
      return err;
    }
  }
