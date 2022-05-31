import axios from "axios";
import toast from "react-hot-toast";
const token = localStorage.getItem("token")?.slice(1, -1);

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

export const postNewUser = async (firstName, lastName, email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return { data, status };
  } catch (error) {
    console.error("failed to save user to db", error);
    return error;
  }
};

export const updateUser = async (userDetails) => {
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

export const deactivateUser = async () => {
  try {
    const { data, status } = await axios({
      method: "DELETE",
      url: `/api/auth/deactivate`,
      headers: { authorization: token },
    });
    return { statusMessage: data.statusMessage, status };
  } catch (error) {
    toast.error("Something went wrong: Deactivate User Failed");
    return error;
  }
};

export const resetUserData = async () => {
  try {
    const { data, status } = await axios({
      method: "POST",
      url: `/api/auth/reset`,
      headers: { authorization: token },
    });
    return { updatedUser: data.updatedUser, status };
  } catch (error) {
    toast.error("Something went wrong: Reset User Failed");
    return error;
  }
};
