import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context";
import { getDate } from "../../utils";
import "./Profile.css";

export const Profile = () => {
  const { user, setUser } = useUser();

  const logoutHandler = () => {
    setUser({ isLoggedIn: false });
    localStorage.removeItem("token");
  };

  return (
    <div className="profile-page flex flex-center">
      {user.isLoggedIn ? (
        <section className="flex">
          <div className="avatar avatar-md m-xs bg-primary fs-xl flex flex-center rounded-circle">
            {user.firstName[0].toUpperCase() + user.lastName[0]}
          </div>
          <div className="m-md">
            <h2 className="h2 ubuntu">
              Name: {`${user.firstName} ${user.lastName}`}
            </h2>
            <h4 className="h3 ubuntu py-xs">
              Joined on {getDate(user.createdAt)}
            </h4>
            <button
              className="btn btn-error full-width p-sm h3"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </section>
      ) : (
        <section className="flex flex-center cart-empty">
          <div className="flex flex-center flex-col">
            <h3 className="h2 ubuntu text-center">Login To See Your Profile</h3>
            <Link
              to="/login"
              className="full-width my-sm p-sm btn btn-primary h4 ubuntu text-center rounded-s"
            >
              Login
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Profile;
