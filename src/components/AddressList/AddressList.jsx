import React from "react";
import { useUser } from "../../context";
import { BsPen, BsTrash } from "react-icons/bs";
export const AddressList = () => {
  const {
    user: { addresses },
  } = useUser();
  return (
    <ul className="address-list my-md flex flex-col gap3">
      addresses
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
              <span className="fs-s">Near {landmark}</span>++
              <span className="fs-s">{pincode}</span>
            </div>
          </div>
          <div className="row">
            <BsPen
              size="2rem"
              color="var(--text-color)"
              className="pointer mx-xs"
              // onClick={() => {
              //   setAddressToUpdate({
              //     _id,
              //     street,
              //     city,
              //     state,
              //     landmark,
              //     pincode,
              //   });
              // setIsAddressesFormOpen(true);
              // }}
            />
            <BsTrash
              size="2rem"
              className="pointer mx-xs"
              color="var(--text-color)"
              // onClick={() => deleteAddressHandler(_id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
