import axios from "axios";
import { axiosCall } from "utils";

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

export const getFilteredProducts = async (page = 1, filters) => {
  try {
    const {
      data: { products, size },
    } = await axiosCall(`/api/products?page=${page}`, "put", { filters });
    return { products, size };
  } catch (error) {
    console.error(error);
  }
};

export const getSimilarProducts = async (category) => {
  try {
    const {
      data: { products },
    } = await axios.get(`/api/similarproducts?category=${category}`);
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
