import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { getUser } from "../../services";
import { useUser } from "../../context";
import toast from "react-hot-toast";
export const Login = () => {
  const { setUser } = useUser();
  const navigator = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const [email, password] =
      e.target.id === "login-with-test-credentials"
        ? [
            { value: process.env.REACT_APP_TEST_EMAIL },
            { value: process.env.REACT_APP_TEST_PASSWORD },
          ]
        : e.target.elements;
    (async () => {
      const { data, status } = await getUser(email.value, password.value);
      if (status === 200) {
        toast.success("Login successful");
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        setUser({ ...data.foundUser, isLoggedIn: true });
        navigator("/products", { replace: true });
      } else toast("Login failed", { icon: "❌" });
    })();
  };

  return (
    <>
      <main className="flex flex-center auth-page">
        <form
          className="card auth-card p-sm"
          onSubmit={loginHandler}
          id="login-form"
        >
          <div className="h3  text-center fw-semibold m-xs">LOGIN</div>
          <div className="m-xs">
            <label className="fs-s">Email</label>
            <input
              type="email"
              placeholder="tushar@furnhouse.com"
              className="input full-width px-sm py-xs my-xs rounded-s"
              required
            />
          </div>
          <div className="m-xs">
            <label className="fs-s">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="input full-width px-sm py-xs my-xs rounded-s"
              required
            />
          </div>
          <div className="spread flex flex-center m-xs">
            <div className="flex flex-center">
              <input
                type="checkbox"
                name="rememberme"
                id="rememberme"
                className="pointer"
              />
              <label htmlFor="rememberme" className="mx-xs fs-s pointer">
                Remember Me
              </label>
            </div>
            <Link to="#" className="fs-s">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="btn btn-primary py-xs px-sm m-xs fs-m"
            id="login"
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-warning p-xs m-xs fs-m "
            id="login-with-test-credentials"
            onClick={loginHandler}
          >
            Login with Test Credentials
          </button>
          <Link
            className="btn btn-outline-primary fs-s list py-xs px-sm m-xs"
            to="/signup"
          >
            Create new Account
            <BsArrowRight className="mx-xs" />
          </Link>
        </form>
      </main>
    </>
  );
};
