import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { getUser } from "../../services";
import { useUser } from "../../context";
export const Login = () => {
  const { setUser } = useUser();
  const navigator = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;

    (async () => {
      const { data, status } = await getUser(email.value, password.value);
      if (status === 200) {
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        setUser({ ...data.foundUser, isLoggedIn: true });
        navigator("/products", { replace: true });
      } else console.error("EMAIL OR PASSWORD IS INCORRECT", data);
    })();
  };

  return (
    <>
      <main className="flex flex-center login-page">
        <form className="card login-card p-sm" onSubmit={formHandler}>
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
          >
            Login
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
