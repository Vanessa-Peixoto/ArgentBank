import logo from "../../assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Link to="/signin" className="main-nav-item">
          <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      </div>
    </nav>
  );
}
export default Header;
