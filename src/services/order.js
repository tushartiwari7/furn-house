import { toast } from "react-hot-toast";
import { axiosCall } from "utils";
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
    const { data, status } = await axiosCall("/api/user/orders", "post", {
      ordersToAdd,
      address,
      paymentId,
      paymentStatus,
    });
    return { orders: data.orders, status };
  } catch (err) {
    toast.error("Something went wrong: Add to Orders Failed");
    return err;
  }
};
