import { useState } from "react";
import { useUser } from "../../../context";
import "./Profile.css";

export const Profile = () => {
  const { user, setUser } = useUser();

  const [{ firstName, lastName, email }, setUserDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const logoutHandler = () => {
    setUser({ isLoggedIn: false });
    localStorage.removeItem("token");
  };

  return (
    <div className="profile-page m-sm flex">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-sm flex flex-col gap3"
      >
        <label className="flex flex-col gap">
          <span className="fs-m">First Name</span>
          <input
            type="text"
            required
            className="input px-sm py-xs"
            value={firstName}
            onChange={(e) =>
              setUserDetails((user) => ({ ...user, firstName: e.target.value }))
            }
          />
        </label>
        <label className="flex flex-col gap">
          <span className="fs-m">Last Name</span>
          <input
            type="text"
            required
            className="input px-sm py-xs"
            value={lastName}
            onChange={(e) =>
              setUserDetails((user) => ({ ...user, lastName: e.target.value }))
            }
          />
        </label>
        <label className="flex flex-col gap">
          <span className="fs-m">Mail Address</span>
          <input
            type="email"
            required
            className="input px-sm py-xs"
            value={email}
            onChange={(e) =>
              setUserDetails((user) => ({ ...user, email: e.target.value }))
            }
          />
        </label>
        <button
          disabled={
            firstName === user.firstName &&
            lastName === user.lastName &&
            email === user.email
          }
          className="btn btn-primary btn-cta py-xs px-sm fs-m font-bebas"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
