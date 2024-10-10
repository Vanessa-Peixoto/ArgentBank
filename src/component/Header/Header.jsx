import logo from "../../assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { logout } from "../../features/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfileMutation } from "../../services/profileApi";
import { useEffect } from "react";

function Header() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

   //retrieve authentication status
   const isConnected = useSelector((state) => state.auth.isConnected);

   const [getProfile, { data }] = useGetProfileMutation();

   useEffect(() => {
    if (isConnected) {
      getProfile();
    }
  }, [getProfile, isConnected]);

  const firstName = data?.body?.firstName;
  
   //disconnect function
   const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(logout());
   }
  
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
      {isConnected ? (
          <>
            <Link className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
              {firstName}
            </Link>
            
            <Link to='/' className="main-nav-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
                {t("dashboard.logout")}
            </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            {t("signin.login")}
          </Link>
      )}
      </div>
    </nav>
  );
}
export default Header;
