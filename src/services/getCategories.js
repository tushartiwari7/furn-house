import axios from "axios";
export const getCategories = async () => {
  try {
    const {data: {categories}} = await axios.get("/api/categories");
    return categories;
  } catch (error) {
    console.log(error);
  }
}