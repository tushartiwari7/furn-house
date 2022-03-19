import "./Signup.css";
import { BsArrowRight } from "react-icons/bs";
import { postNewUser } from "../../services";
import { useUser } from "../../context";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const { setUser } = useUser();
  const navigator = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const [firstName, lastName, email, password] = e.target.elements;

    (async () => {
      const { data, status } = await postNewUser(
        firstName.value,
        lastName.value,
        email.value,
        password.value
      );

      localStorage.setItem("token", JSON.stringify(data.encodedToken));
      const createdUser = data.createdUser;
      delete createdUser.password;
      setUser({ ...createdUser, isLoggedIn: true });
      navigator("/products", { replace: true });
      console.log({ data, status });
    })();
  };

  return (
    <main className="flex flex-center fill-height auth-page">
      <form className="card auth-card p-sm" onSubmit={signupHandler}>
        <div className="h3  text-center fw-semibold m-xs">Sign Up</div>
        <div className="flex">
          <div className="m-xs">
            <label className="fs-s">First Name</label>
            <input
              type="text"
              placeholder="James"
              className="input full-width px-sm py-xs my-xs rounded-s"
              required
            />
          </div>
          <div className="m-xs">
            <label className="fs-s">Last Name</label>
            <input
              type="text"
              placeholder="Anderson"
              className="input full-width px-sm py-xs my-xs rounded-s"
            />
          </div>
        </div>
        <div className="m-xs">
          <label className="fs-s">Email</label>
          <input
            type="email"
            placeholder="jamesanderson@example.com"
            className="input full-width px-sm py-xs my-xs rounded-s"
            required
          />
        </div>
        <div className="m-xs">
          <label className="fs-s">Password</label>
          <input
            type="password"
            placeholder="enter password"
            className="input full-width px-sm py-xs my-xs rounded-s"
            required
          />
        </div>
        <div className="m-xs">
          <label className="fs-s">Confirm Password</label>
          <input
            type="password"
            placeholder="confirm your password"
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
              I accept all terms and conditions
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary py-xs px-sm m-xs fs-m">
          Create New Account
        </button>
        <Link
          className="btn btn-outline-primary fs-s list py-xs px-sm m-xs"
          to="/login"
        >
          Already have an Account
          <BsArrowRight />
        </Link>
      </form>
    </main>
  );
};
