import React from "react";
import { useUser } from "../../context";
export const AddressList = () => {
  const {
    user: { addresses },
  } = useUser();
  return (
    <ul className="address-list my-md flex flex-col gap3">
      {addresses.map(({ _id, street, city, state, landmark, pincode }) => (
        <li key={_id} className="unstyled flex">
          <input
            type="radio"
            className="mx-sm"
            name="choose-address"
            id={_id}
            onChange={(e) => console.log(e.target)}
          />
          <label className="row address-info" htmlFor={_id}>
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
          </label>
        </li>
      ))}
    </ul>
  );
};
