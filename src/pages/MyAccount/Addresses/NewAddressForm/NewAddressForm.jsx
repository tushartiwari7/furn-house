import { useState } from "react";
import { BsX } from "react-icons/bs";
import "./NewAddressForm.css";
import { states, validateAddressForm } from "../../../../utils";
import { useUser } from "../../../../context";
export const NewAddressForm = ({ updateAddr, updateAddrSetter, setter }) => {
  const initialAddress = {
    street: "",
    city: "",
    state: "",
    landmark: "",
    pincode: "",
  };

  const [address, setAddress] = useState(updateAddr ?? initialAddress);
  const { addAddressHandler, updateAddressHandler } = useUser();
  const autofillAddress = () =>
    setAddress({
      street: "#43, 2nd Floor, S.G. Road, Vile Parle (W)",
      city: "Shimla",
      state: "Himachal Pradesh",
      landmark: "S.G. Hospital",
      pincode: "171001",
    });

  const formHandler = async (e) => {
    e.preventDefault();
    if (validateAddressForm(address)) {
      await addAddressHandler(address);
      setter(false);
    }
  };

  return (
    <form
      id="form"
      onSubmit={formHandler}
      className="p-md flex flex-col gap3 add-address"
    >
      <label className="flex fs-l font-bebas spread">
        Add New Address
        <BsX
          size="2.5rem"
          className="pointer"
          onClick={() => {
            updateAddrSetter(null);
            setter(false);
          }}
        />
      </label>
      <label className="flex flex-col gap">
        <span className="fs-m">Street Address</span>
        <input
          type="text"
          required
          className="input px-sm py-xs"
          placeholder="1234 Main St phase-1"
          value={address.street}
          onChange={(e) =>
            setAddress((address) => ({ ...address, street: e.target.value }))
          }
        />
      </label>
      <div className="flex gap2 two-cols">
        <label className="flex flex-col gap w50">
          <span className="fs-m">Landmark</span>
          <input
            type="text"
            className="input px-sm py-xs"
            value={address.landmark}
            placeholder="Sai Mandir"
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                landmark: e.target.value,
              }))
            }
          />
        </label>
        <label className="flex flex-col gap w50">
          <span className="fs-m">Postal Code</span>
          <input
            type="number"
            required
            minLength="6"
            maxLength="6"
            placeholder="110085"
            className="input px-sm py-xs "
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
      <div className="flex gap2 two-cols">
        <label className="flex flex-col gap w50">
          <span className="fs-m">City</span>
          <input
            type="text"
            required
            className="input px-sm py-xs"
            value={address.city}
            placeholder="Shimla"
            onChange={(e) =>
              setAddress((address) => ({ ...address, city: e.target.value }))
            }
          />
        </label>
        <label className="flex flex-col gap w50">
          <span className="fs-m">State</span>
          <select
            required
            className="input px-sm py-xs "
            value={address.state}
            onChange={(e) =>
              setAddress((address) => ({
                ...address,
                state: e.target.value,
              }))
            }
          >
            <option value="">Select State</option>
            {states.map((state, idx) => (
              <option value={state} key={idx}>
                {state}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex gap">
        {updateAddr && (
          <button
            className="btn btn-cta px-sm py-xs fs-m font-bebas fit-width"
            id="update-address"
            type="button"
            onClick={async () => {
              await updateAddressHandler(address);
              updateAddrSetter(null);
              setter(false);
            }}
          >
            Update Address
          </button>
        )}
        <button
          className="btn btn-cta px-sm py-xs fs-m font-bebas fit-width"
          type="submit"
        >
          Add New
        </button>
        <button
          className="btn btn-cta-secondary px-sm py-xs fs-m font-bebas fit-width"
          onClick={autofillAddress}
          type="button"
        >
          AutoFill Address
        </button>
      </div>
    </form>
  );
};
