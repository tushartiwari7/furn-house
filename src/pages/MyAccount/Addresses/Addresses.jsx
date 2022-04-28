import { useState } from "react";
import { BsPen, BsPlus, BsTrash } from "react-icons/bs";
import "./Addresses.css";
import { NewAddressForm } from "./NewAddressForm/NewAddressForm";
export const Addresses = () => {
  const [isAddressesFormOpen, setIsAddressesFormOpen] = useState(false);

  return (
    <main className="addresses flex flex-col">
      {isAddressesFormOpen ? (
        <NewAddressForm setter={setIsAddressesFormOpen} />
      ) : (
        <button
          className="fit-width pointer font-bebas fs-l px-sm py-xs clear-filter-btn flex"
          onClick={() => setIsAddressesFormOpen(true)}
        >
          Add New Address
          <BsPlus className="flex flex-center mx-xs" size="2.5rem" />
        </button>
      )}
      <ul className="address-list my-md">
        <li className="unstyled flex">
          <div className="row address-info">
            <div className="flex flex-col gap">
              <span className="fs-m">
                #43, 2nd Floor, S.G. Road, Vile Parle (W)
              </span>
              <span className="fs-s">Shimla, Himachal Pradesh, India</span>
            </div>
            <div className="flex flex-col gap">
              <span className="fs-s">Near S.G. Hospital</span>
              <span className="fs-s">171001</span>
            </div>
          </div>
          <div className="row">
            <BsPen
              size="2rem"
              color="var(--text-color)"
              className="pointer mx-xs"
            />
            <BsTrash
              size="2rem"
              className="pointer mx-xs"
              color="var(--text-color)"
            />
          </div>
        </li>
      </ul>
    </main>
  );
};
