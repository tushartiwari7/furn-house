import axios from "axios";
export const getSingleProduct = async (productId) => {
  try {
    const {
      data: { product },
    } = await axios.get(`/api/products/${productId}`);
    return product;
  } catch (error) {
    console.error(error);
  }
};
