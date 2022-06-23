import { BsArrowRight } from "react-icons/bs";
import { postNewUser } from "services";
import { useUser } from "context";
import { Link, useNavigate } from "react-router-dom";
import { validateSignupForm } from "helpers";

export const Signup = () => {
  const { setUser } = useUser();
  const navigator = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (!validateSignupForm(e.target.elements)) return;
    (async () => {
      const [firstName, lastName, email, password] = e.target.elements;
      const { data } = await postNewUser(
        firstName.value,
        lastName.value,
        email.value,
        password.value
      );

      localStorage.setItem("token", data.encodedToken);
      const createdUser = data.createdUser;
      delete createdUser.password;
      setUser({ ...createdUser, isLoggedIn: true });
      navigator("/products", { replace: true });
    })();
  };

  return (
    <main className="flex flex-center fill-height auth-page">
      <form className="card auth-card p-sm" onSubmit={signupHandler}>
        <h1 className="h1 text-center fw-lighter font-bebas m-xs">Sign Up</h1>
        <div className="flex">
          <div className="m-xs">
            <label className="fs-s font-bebas">First Name</label>
            <input
              type="text"
              placeholder="James"
              className="input full-width px-sm py-xs my-xs rounded-s ubuntu"
              required
            />
          </div>
          <div className="m-xs">
            <label className="fs-s font-bebas">Last Name</label>
            <input
              type="text"
              placeholder="Anderson"
              className="input full-width px-sm py-xs my-xs rounded-s ubuntu"
            />
          </div>
        </div>
        <div className="m-xs">
          <label className="fs-s font-bebas">Email</label>
          <input
            type="email"
            placeholder="jamesanderson@example.com"
            className="input full-width px-sm ubuntu py-xs my-xs rounded-s"
            required
          />
        </div>
        <div className="m-xs">
          <label className="fs-s font-bebas">Password</label>
          <input
            type="password"
            placeholder="enter password"
            className="input full-width px-sm py-xs my-xs rounded-s ubuntu"
            required
          />
        </div>
        <div className="m-xs">
          <label className="fs-s font-bebas">Confirm Password</label>
          <input
            type="password"
            placeholder="confirm your password"
            className="input full-width px-sm py-xs my-xs rounded-s ubuntu"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-cta py-xs px-sm m-xs fs-m font-bebas"
        >
          Create New Account
        </button>
        <Link
          className="btn btn-cta-secondary font-bebas fs-s list py-xs px-sm m-xs"
          to="/login"
        >
          Already have an Account
          <BsArrowRight />
        </Link>
      </form>
    </main>
  );
};

export default Signup;
