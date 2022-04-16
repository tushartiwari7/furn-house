import React from "react";
import { useUser } from "../../context";
import { Link, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const {
    user: { isLoggedIn },
  } = useUser();

  return isLoggedIn ? (
    children
  ) : (
    <section className="flex flex-center cart-empty">
      <div className="flex flex-center flex-col">
        <h3 className="h2 ubuntu text-center">
          Login To See Items In {location.pathname.slice(1)}
        </h3>
        <Link
          to="/login"
          className="full-width my-sm p-sm btn btn-primary h4 ubuntu text-center rounded-s"
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default PrivateRoute;
