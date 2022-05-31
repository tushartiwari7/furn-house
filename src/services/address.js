import axios from "axios";
import toast from "react-hot-toast";

export const addAddress = async (address) => {
  try {
    const token = localStorage.getItem("token")?.slice(1, -1);
    const { data, status } = await axios({
      method: "POST",
      url: `/api/user/addresses`,
      headers: { authorization: token },
      data: { address },
    });
    return { addresses: data.addresses, status };
  } catch (err) {
    toast.error("Something went wrong: Add Address Failed");
    return err;
  }
};

export const deleteAddress = async (addressID) => {
  try {
    const token = localStorage.getItem("token")?.slice(1, -1);
    const { data, status } = await axios({
      method: "DELETE",
      url: `/api/user/addresses/${addressID}`,
      headers: { authorization: token },
    });
    return { addresses: data.addresses, status };
  } catch (error) {
    toast.error("Something went wrong: Delete Address Failed");
    return error;
  }
};

export const updateAddress = async (address) => {
  try {
    const token = localStorage.getItem("token")?.slice(1, -1);
    const { data, status } = await axios({
      method: "POST",
      url: `/api/user/addresses/${address._id}`,
      headers: { authorization: token },
      data: { address },
    });
    return { addresses: data.addresses, status };
  } catch (error) {
    toast.error("Something went wrong: Update Address Failed");
    return error;
  }
};
