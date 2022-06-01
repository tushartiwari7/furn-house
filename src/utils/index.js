import axios from "axios";
export { compose } from "./compose";
export { sort } from "./sort";
export { priceFilter } from "./priceFilter";
export { ratingFilter } from "./ratingFilter";
export { categoryFilter } from "./categoryFilter";
export { productSearchFilter } from "./productSearchFilter";
export { getCartSummary } from "./getCartSummary";
export { getDiscountPercentage } from "./getDiscountPercentage";
export { getDate } from "./getDate";
export * from "./sliderSettings";
export * from "./validation";

/**
 * @description: This function is used to make a REQUEST to the backend server
 * @param {string}  url: string
 * @param {"get" | "post" | "put" | "delete" } method: string
 * @param {} data?: object
 * @returns: Promise
 */

export const axiosCall = async (url, method, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const states = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Pondicherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Tripura",
  "Uttaranchal",
  "Uttar Pradesh",
  "West Bengal",
];
