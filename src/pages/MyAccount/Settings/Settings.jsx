import React from "react";
import "./Settings.css";
export const Settings = () => {
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
        <button className="btn btn-primary btn-cta-secondary px-sm py-xs fit-width font-bebas fs-m">
          Clear Data
        </button>
      </article>
      <article className="flex flex-col gap mx-md">
        <p className="fs-l ubuntu full-width">Deactivate Account</p>
        <p className="fs-m">
          You can delete your FurnHouse acoount at any point. This deletes your
          profile and the info associated with it.
        </p>
        <button className="btn btn-primary btn-cta-secondary px-sm py-xs fit-width font-bebas fs-m">
          Deactivate Now
        </button>
      </article>
    </main>
  );
};
