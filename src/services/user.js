import axios from "axios";
import toast from "react-hot-toast";
import { axiosCall } from "../utils";
export const getUser = async (email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    return { data, status };
  } catch (error) {
    toast.error("No user availaible With this Mail Id");
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
    const { data, status } = await axiosCall("/api/auth/update", "post", {
      userDetails,
    });
    return { updatedUser: data.updatedUser, status };
  } catch (error) {
    toast.error("Something went wrong: Update User Failed");
    return error;
  }
};

export const deactivateUser = async () => {
  try {
    const { data, status } = await axiosCall("/api/auth/deactivate", "delete");
    return { statusMessage: data.statusMessage, status };
  } catch (error) {
    toast.error("Something went wrong: Deactivate User Failed");
    return error;
  }
};

export const resetUserData = async () => {
  try {
    const { data, status } = await axiosCall("/api/auth/reset", "post");
    return { updatedUser: data.updatedUser, status };
  } catch (error) {
    toast.error("Something went wrong: Reset User Failed");
    return error;
  }
};

export const forgotPassword = async (newPassword) => {
  try {
    const { status } = await axiosCall("/api/auth/forgot", "put", {
      newPassword,
    });
    return { statusMessage: "Updated New Password.", status };
  } catch (error) {}
};
