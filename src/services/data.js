import axios from "axios";
export const getProducts = async () => {
  try {
    const {
      data: { products },
    } = await axios.get("/api/products");
    return products;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  try {
    const {
      data: { categories },
    } = await axios.get("/api/categories");
    return categories;
  } catch (error) {
    console.error(error);
  }
};

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
