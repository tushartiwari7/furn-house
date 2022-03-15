import axios from "axios";
export const getProducts = async () => {
  try {
    const {data: {products}} = await axios.get("/api/products");
    return products;
  } catch (error) {
    console.log(error);
  }
}