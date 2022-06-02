import axios from "axios";

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

export const compose = (filters, ...utilFunctions) => {
  return (initialProducts) =>
    utilFunctions.reduce(
      (filteredProducts, func) => func(filteredProducts, filters),
      initialProducts
    );
};

export * from "./filters";
export * from "./cart";
