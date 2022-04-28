import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MyAccount.css";
import { v4 as uuid } from "uuid";
export const MyAccount = () => {
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
      </ul>
      <Outlet />
    </div>
  );
};
