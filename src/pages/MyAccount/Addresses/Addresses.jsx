import { useState } from "react";
import { BsPen, BsPlus, BsTrash } from "react-icons/bs";
import { useUser } from "context";
import "./Addresses.css";
import { NewAddressForm } from "./NewAddressForm/NewAddressForm";
export const Addresses = () => {
  const [isAddressesFormOpen, setIsAddressesFormOpen] = useState(false);
  const [addressToUpdate, setAddressToUpdate] = useState(null);
  const {
    user: { addresses },
    deleteAddressHandler,
  } = useUser();

  return (
    <section className="addresses flex flex-col">
      {isAddressesFormOpen ? (
        <NewAddressForm
          updateAddr={addressToUpdate}
          updateAddrSetter={setAddressToUpdate}
          setter={setIsAddressesFormOpen}
        />
      ) : (
        <button
          className="fit-width pointer font-bebas fs-l px-sm py-xs clear-filter-btn flex"
          onClick={() => setIsAddressesFormOpen(true)}
        >
          Add New Address
          <BsPlus className="flex flex-center mx-xs" size="2.5rem" />
        </button>
      )}
      <ul className="address-list my-md flex flex-col gap3">
        {addresses.map(({ _id, street, city, state, landmark, pincode }) => (
          <li key={_id} className="unstyled flex">
            <div className="row address-info">
              <div className="flex flex-col gap">
                <span className="fs-m">{street}</span>
                <span className="fs-s">
                  {city}, {state}, India
                </span>
              </div>
              <div className="flex flex-col gap">
                <span className="fs-s">Near {landmark}</span>
                <span className="fs-s">{pincode}</span>
              </div>
            </div>
            <div className="row actions">
              <BsPen
                size="2rem"
                color="var(--text-color)"
                className="pointer mx-xs"
                onClick={() => {
                  setAddressToUpdate({
                    _id,
                    street,
                    city,
                    state,
                    landmark,
                    pincode,
                  });
                  setIsAddressesFormOpen(true);
                }}
              />
              <BsTrash
                size="2rem"
                className="pointer mx-xs"
                color="var(--text-color)"
                onClick={() => deleteAddressHandler(_id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
