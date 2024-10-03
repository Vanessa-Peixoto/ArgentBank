import logo from "../../assets/images/argentBankLogo.png";
import './header.scss';

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
        <a className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}
export default Header;
