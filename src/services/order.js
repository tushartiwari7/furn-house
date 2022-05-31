import axios from "axios";
import { toast } from "react-hot-toast";
/**
 *
 * @param {order[]} ordersToAdd
 * @param address
 * @param {string} paymentId
 * @param {"Cancelled" | "Paid" | "Failed"} paymentStatus
 * @returns
 */

export const addOrders = async (
  ordersToAdd,
  address,
  paymentId,
  paymentStatus
) => {
  try {
    const token = localStorage.getItem("token")?.slice(1, -1);
    const { data, status } = await axios({
      method: "POST",
      url: `/api/user/orders`,
      headers: { authorization: token },
      data: { ordersToAdd, address, paymentStatus, paymentId },
    });
    return { orders: data.orders, status };
  } catch (err) {
    toast.error("Something went wrong: Add to Orders Failed");
    return err;
  }
};
