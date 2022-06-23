import { AddressList } from "components";
import { NewAddressForm } from "pages/MyAccount/Addresses/NewAddressForm/NewAddressForm";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export const Checkout = () => {
  const [isAddressesFormOpen, setIsAddressesFormOpen] = useState(false);

  return (
    <>
      <h2 className="cart-title h3 fs-xl fw-lighter font-bebas p-xs">
        Deliver To:
        <button
          className="fit-width pointer font-bebas fs-l px-sm py-xs clear-filter-btn"
          onClick={() => setIsAddressesFormOpen(true)}
        >
          Add New Address
          <BsPlus className="flex flex-center mx-xs" size="2.5rem" />
        </button>
      </h2>
      {isAddressesFormOpen && (
        <NewAddressForm setter={setIsAddressesFormOpen} />
      )}
      <AddressList />
    </>
  );
};
