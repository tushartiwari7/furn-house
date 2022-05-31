import toast from "react-hot-toast";
import { useUser } from "../context";
import { addOrders } from "../services/order";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

export const useRazorpay = () => {
  const {
    user: { cart, selectedAddress },
    setUser,
  } = useUser();
  const navigate = useNavigate();
  const createOrder = async (paymentId, paymentStatus = "Paid") => {
    try {
      const { orders } = await addOrders(
        cart,
        selectedAddress,
        paymentId,
        paymentStatus
      );
      setUser((user) => ({ ...user, cart: [], orders }));
      toast.success("Order Placed Successfully");
      navigate("/success");
    } catch (err) {
      console.error("FAILED TO ADD ORDER", err);
    }
  };

  /**
   * @param {*} total
   * @param {*} name
   * @param {*} email
   */
  const loadRazorPay = async (total, name, email) => {
    const options = {
      key: process.env.REACT_APP_RAZOR_KEY,
      amount: total * 100,
      currency: "INR",
      name: "Furn House",
      handler: function (response) {
        createOrder(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          createOrder(v4(), "Failed");
          toast.error("Payment Cancelled");
        },
      },
      prefill: {
        name,
        email,
        contact: process.env.REACT_APP_PHONE_NUMBER,
      },
      theme: {
        color: "#c7ac92",
      },
    };
    const razorpayEmbed = new window.Razorpay(options);
    razorpayEmbed.open();
    razorpayEmbed.on("payment.failed", function (response) {
      console.error(response);
      toast.error("Payment Failed");
    });
  };
  return { createOrder, loadRazorPay };
};
