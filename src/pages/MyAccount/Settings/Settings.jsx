import React from "react";
import { deactivateUser, resetUserData } from "../../../services";
import "./Settings.css";
import { useProducts, useUser } from "../../../context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const Settings = () => {
  const { setUser } = useUser();
  const { setIsLoading } = useProducts();
  const navigate = useNavigate();
  return (
    <main className="m-sm flex flex-col settings gap3">
      <p className="fs-xl ubuntu full-width">Settings</p>
      <article className="flex flex-col gap mx-md">
        <p className="fs-l ubuntu full-width">Clear All Data</p>
        <p className="fs-m">
          You can delete all your data from your FurnHouse account. This
          includes your Wishlist and Cart Items, your orders, your addresses,
          and your payment information.
        </p>
        <button
          className="btn btn-primary btn-cta-secondary px-sm py-xs fit-width font-bebas fs-m"
          onClick={async () => {
            setIsLoading(true);
            await resetUserData();
            setUser((user) => ({
              ...user,
              cart: [],
              wishlist: [],
              addresses: [],
              orders: [],
            }));
            setIsLoading(false);
          }}
        >
          Reset Data
        </button>
      </article>
      <article className="flex flex-col gap mx-md">
        <p className="fs-l ubuntu full-width">Deactivate Account</p>
        <p className="fs-m">
          You can delete your FurnHouse acoount at any point. This deletes your
          profile and the info associated with it from our servers.
        </p>
        <button
          className="btn btn-primary btn-cta-secondary px-sm py-xs fit-width font-bebas fs-m"
          onClick={async () => {
            const { statusMessage } = await deactivateUser();
            localStorage.removeItem("token");
            setUser({ isLoggedIn: false });
            toast.success(statusMessage);
            navigate("/");
          }}
        >
          Deactivate Now
        </button>
      </article>
    </main>
  );
};
