import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MyAccount.css";
import { v4 as uuid } from "uuid";
import { useUser } from "../../context";
export const MyAccount = () => {
  const { setUser } = useUser();
  const redirects = [
    {
      route: "./",
      routeName: "Profile",
    },
    {
      route: "addresses",
      routeName: "Manage Addresses",
    },
    {
      route: "change-password",
      routeName: "Change Password",
    },
    {
      route: "orders",
      routeName: "Orders",
    },
    {
      route: "settings",
      routeName: "Settings",
    },
  ];

  const logoutHandler = () => {
    setUser({ isLoggedIn: false });
    localStorage.removeItem("token");
  };

  return (
    <div className="account flex">
      <ul className="unstyled p-sm rounded-m">
        <p className="fs-xl ubuntu username">Hello Tushar!</p>
        {redirects.map(({ route, routeName }) => (
          <li key={uuid()}>
            <NavLink
              to={route}
              style={({ isActive }) => ({
                backgroundColor: isActive && "var(--primary)",
                color: isActive && "var(--text-color100)",
              })}
              className="list-item my-xs full-width flex px-sm py-xs"
            >
              <span className="fs-m">{routeName}</span>
            </NavLink>
          </li>
        ))}
        <li key={uuid()}>
          <button
            className="list-item my-xs full-width flex px-sm py-xs btn logout"
            onClick={logoutHandler}
          >
            <span className="fs-m">Log Out</span>
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
