import { useState } from "react";
import { BsX } from "react-icons/bs";
import "./NewAddressForm.css";
import { states } from "../../../../utils";
export const NewAddressForm = ({ setter }) => {
  const initialAddress = {
    street: "",
    city: "",
    state: "",
    landmark: "",
    pincode: "",
  };

  const [address, setAddress] = useState(initialAddress);

  const autofillAddress = () =>
    setAddress({
      street: "#43, 2nd Floor, S.G. Road, Vile Parle (W)",
      city: "Shimla",
      state: "Himachal Pradesh",
      landmark: "S.G. Hospital",
      pincode: "171001",
    });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-md flex flex-col gap3 add-address"
    >
      <label className="flex fs-l font-bebas spread">
        Add New Address
        <BsX size="2.5rem" className="pointer" onClick={() => setter(false)} />
      </label>
      <label className="flex flex-col gap">
        <span className="fs-m">Street Address</span>
        <input
          type="text"
          required
          className="input px-sm py-xs"
          value={address.street}
          onChange={(e) =>
            setAddress((address) => ({ ...address, street: e.target.value }))
          }
        />
      </label>
      <div className="flex row gap2">
        <label className="flex flex-col gap">
          <span className="fs-m">Landmark</span>
          <input
            type="text"
            className="input px-sm py-xs"
            value={address.landmark}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                landmark: e.target.value,
              }))
            }
          />
        </label>
        <label className="flex flex-col gap">
          <span className="fs-m">Postal Code</span>
          <input
            type="number"
            required
            minLength="6"
            className="input px-sm py-xs"
            value={address.pincode}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                pincode: e.target.value,
              }))
            }
          />
        </label>
      </div>
      <div className="flex row gap2">
        <label className="flex flex-col gap">
          <span className="fs-m">City</span>
          <input
            type="text"
            required
            className="input px-sm py-xs"
            value={address.city}
            onChange={(e) =>
              setAddress((address) => ({ ...address, city: e.target.value }))
            }
          />
        </label>
        <label className="flex flex-col gap">
          <span className="fs-m">State</span>
          <select
            required
            className="input px-sm py-xs"
            value={address.state}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                state: e.target.value,
              }))
            }
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex gap">
        <button className="btn btn-cta px-sm py-xs fs-m font-bebas fit-width">
          Save Changes
        </button>
        <button
          className="btn btn-cta-secondary px-sm py-xs fs-m font-bebas fit-width"
          onClick={autofillAddress}
        >
          AutoFill Address
        </button>
      </div>
    </form>
  );
};
