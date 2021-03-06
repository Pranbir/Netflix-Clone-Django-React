import { Link } from "react-router-dom";
import NetflixLogo from "../Assests/logo.png";
import Form from "../HomePage/subComponents/Form";
import LangSelect from "../HomePage/subComponents/LangSelect";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <img className="netflix-logo" src={NetflixLogo} alt="Netflix Logo" />
        <div>
          <LangSelect />
          <Link to="/login" className="red-btn signin-btn">
            Sign In
          </Link>
        </div>
      </header>
      <div className="showcase-wrapper">
        <div className="showcase">
          <h1 className="showcase-title">
            Unlimited movies, TV shows and more.
          </h1>
          <h2 className="showcase-sub-title">
            Watch anywhere. Cancel anytime.
          </h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Header;
