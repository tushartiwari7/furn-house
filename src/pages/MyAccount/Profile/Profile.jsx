import { useState } from "react";
import { useUser } from "context";
import "./Profile.css";

export const Profile = () => {
  const { user, updateUserHandler } = useUser();

  const [{ firstName, lastName, email }, setUserDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  const isUnchanged =
    firstName === user.firstName &&
    lastName === user.lastName &&
    email === user.email;
  return (
    <div className="profile-page m-sm flex">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await updateUserHandler({ firstName, lastName, email });
        }}
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
            // disabled
            onChange={(e) =>
              setUserDetails((user) => ({ ...user, email: e.target.value }))
            }
          />
        </label>
        <button
          disabled={isUnchanged}
          className="btn btn-primary btn-cta py-xs px-sm fs-m font-bebas"
          type="submit"
        >
          Update
        </button>
        {user.email !== email && (
          <p className="fs-s">
            Note: Changing your Email ID will also cause your primary login ID
            to change
          </p>
        )}
      </form>
    </div>
  );
};

export default Profile;
