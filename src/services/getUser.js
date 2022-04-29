import axios from "axios";
import toast from "react-hot-toast";

export const getUser = async (email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return { data, status };
  } catch (error) {
    console.error("no user availaible With this Mail Id", error);
    return error;
  }
};

export const updateUser = async (userDetails) => {
  const token = localStorage.getItem("token").slice(1, -1);
  try {
    const { data, status } = await axios({
      method: "POST",
      url: `/api/auth/update`,
      headers: { authorization: token },
      data: { userDetails },
    });
    return { updatedUser: data.updatedUser, status };
  } catch (error) {
    toast.error("Something went wrong: Update User Failed");
    return error;
  }
};
