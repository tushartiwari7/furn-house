import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./MyAccount.css";
import { v4 as uuid } from "uuid";
import { useUser } from "../../context";
import { BsList } from "react-icons/bs";
export const MyAccount = () => {
  const {
    user: { firstName },
    setUser,
  } = useUser();

  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  const redirects = [
    {
      route: "./",
      routeName: "Profile",
    },
    {
      route: "addresses",
      routeName: "Manage Addresses",
    },
    // {
    //   route: "change-password",
    //   routeName: "Change Password",
    // },
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
    <main className="main account flex">
      <BsList
        size="3rem"
        color="var(--text-color)"
        className="account-menu-btn my-xs pointer"
        onClick={() => setAccountMenuOpen((open) => !open)}
      />
      <ul
        className="unstyled p-sm rounded-m"
        style={{ left: isAccountMenuOpen ? "auto" : "-100vw" }}
        onClick={() => setAccountMenuOpen(false)}
      >
        <p className="fs-xl ubuntu username">Hello {firstName}!</p>
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
    </main>
  );
};
