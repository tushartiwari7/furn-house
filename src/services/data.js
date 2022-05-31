import axios from "axios";

export const getProducts = async (page = 1) => {
  try {
    const {
      data: { products },
    } = await axios.get(`/api/products?page=${page}`);
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
