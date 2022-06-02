import React from "react";
import { useUser } from "context";
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
          to={`/login?from=${location.pathname}`}
          className="full-width my-md py-sm btn btn-cta h2 font-bebas fw-lighter text-center"
        >
          Log in
        </Link>
      </div>
    </section>
  );
};

export default PrivateRoute;
