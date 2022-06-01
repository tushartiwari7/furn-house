import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./Login.css";
import { getUser } from "../../services";
import { useUser } from "../../context";
import toast from "react-hot-toast";
export const Login = () => {
  const { setUser } = useUser();
  const navigator = useNavigate();
  const [params] = useSearchParams();

  const loginHandler = async (e) => {
    e.preventDefault();
    const [email, password] =
      e.target.id === "login-with-test-credentials"
        ? [
            { value: process.env.REACT_APP_TEST_EMAIL },
            { value: process.env.REACT_APP_TEST_PASSWORD },
          ]
        : e.target.elements;

    if (password.value.length < 6) {
      toast.error("Please enter password with minimum 6 characters");
      return;
    }

    const { data, status } = await getUser(email.value, password.value);

    if (status === 200) {
      localStorage.setItem("token", data.encodedToken);
      setUser({ ...data.foundUser, isLoggedIn: true });
      navigator(params.get("from") ?? "/products", { replace: true });
      toast.success("Login successful");
    } else toast.error("Login failed");
  };

  return (
    <>
      <main className="flex flex-center auth-page">
        <form
          className="card auth-card p-sm"
          onSubmit={loginHandler}
          id="login-form"
        >
          <h1 className="h1 font-bebas text-center fw-lighter m-xs">LOGIN</h1>
          <div className="m-xs">
            <label className="fs-s fw-light font-bebas">E-mail</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="input full-width px-sm py-xs my-xs rounded-s ubuntu"
              required
            />
          </div>
          <div className="m-xs">
            <label className="fs-s font-bebas">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="input full-width px-sm py-xs my-xs rounded-s ubuntu"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-cta py-xs px-sm m-xs fs-l font-bebas"
            id="login"
          >
            Login
          </button>
          <button
            type="submit"
            className="btn btn-cta-secondary p-xs m-xs font-bebas fs-m"
            id="login-with-test-credentials"
            onClick={loginHandler}
          >
            Login with Test Credentials
          </button>
          <Link
            className="btn btn-outline-primary fs-s list py-xs px-sm m-xs ubuntu"
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

export default Login;
