import logo from "../../assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  
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
          {t('signin.login')}
        </Link>
      </div>
    </nav>
  );
}
export default Header;
