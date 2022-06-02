import React from "react";
import { deactivateUser, forgotPassword, resetUserData } from "services";
import "./Settings.css";
import { useProducts, useUser } from "context";
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
      <article className="flex flex-col gap mx-md">
        <p className="fs-l ubuntu full-width">Forgot Password</p>
        <p className="fs-m">Update your Password with a new Password.</p>
        <form
          className="flex gap"
          onSubmit={async (e) => {
            e.preventDefault();
            const inputEl = e.target.elements[0];
            const { statusMessage } = await forgotPassword(inputEl.value);
            toast.success(statusMessage);
            inputEl.value = "";
          }}
        >
          <input
            placeholder="Enter New password"
            className="input full-width px-sm py-xs my-xs rounded-s ubuntu"
            required
          />
          <button
            type="submit"
            className="btn btn-primary btn-cta-secondary px-sm py-xs fit-width font-bebas fs-m"
          >
            Submit
          </button>
        </form>
      </article>
    </main>
  );
};
