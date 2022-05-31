import toast from "react-hot-toast";
import { axiosCall } from "../utils";

export const addAddress = async (address) => {
  try {
    const { data, status } = await axiosCall("/api/user/addresses", "post", {
      address,
    });
    return { addresses: data.addresses, status };
  } catch (err) {
    toast.error("Something went wrong: Add Address Failed");
    return err;
  }
};

export const deleteAddress = async (addressID) => {
  try {
    const { data, status } = await axiosCall(
      `/api/user/addresses/${addressID}`,
      "delete"
    );
    return { addresses: data.addresses, status };
  } catch (error) {
    toast.error("Something went wrong: Delete Address Failed");
    return error;
  }
};

export const updateAddress = async (address) => {
  try {
    const { data, status } = await axiosCall(
      `/api/user/addresses/${address._id}`,
      "post",
      { address }
    );
    return { addresses: data.addresses, status };
  } catch (error) {
    toast.error("Something went wrong: Update Address Failed");
    return error;
  }
};
