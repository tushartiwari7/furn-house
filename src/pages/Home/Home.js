import { Link } from "react-router-dom";

export const Home = () => {
  return (

    <header className="App-header">
      <h1 className="brand-title">
        Welcome to <span>mockBee!</span>
      </h1>
      <p className="brand-description">
        Get started by editing <code>src/App.js</code>
      </p>
      <div className="links">
        <a
          href="https://mockbee.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Explore mockBee
        </a>
        <a
          href="https://mockbee.netlify.app/docs/api/introduction"
          target="_blank"
          rel="noreferrer"
        >
          API Documentation
        </a>
        <a
          href="https://github.com/neogcamp/mockBee"
          target="_blank"
          rel="noreferrer"
        >
          Contribute
        </a>
        <Link to="/mockman"> MockMan </Link>
      </div>
    </header>
  );
};
