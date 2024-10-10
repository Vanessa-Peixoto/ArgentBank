import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./form.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import useLogin from "../../hooks/useLogin"; // Importez le hook personnalisé
import { updateUsername, updatePassword, toggleRememberMe } from "../../features/formSlice"; // Assurez-vous d'importer les actions nécessaires
import { useState } from "react";
import { useNavigate } from "react-router";

function Form() {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //hook react redux, read part of the state in the store
  //access the values of username, password...
  const { username, password, rememberMe } = useSelector((state) => state.form);
  
  //store errors
  const [clientErrors, setClientErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  
  //call the hook which manage the connection
  const { handleSubmit, isLoading } = useLogin(dispatch, setClientErrors, setBackendErrors);

  return (
    <section className="sign-in-content">
      <div className="container-title-form">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>{t("signin.login")}</h1>
      </div>
      <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(username, password, t, navigate);
        }}>
        <div className="input-wrapper">
          <label htmlFor="username">{t("signin.user")}</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              dispatch(updateUsername(e.target.value));
              setClientErrors({...clientErrors, username: ""});
            }}
          />
          {clientErrors.username && (
              <p className="error-message">{clientErrors.username}</p>
          )}
          {backendErrors.username && (
              <p className="error-message">{backendErrors.username}</p>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">{t("signin.password")}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              dispatch(updatePassword(e.target.value));
              setClientErrors({...clientErrors, password:""});
            }}
          />
          {clientErrors.password && (
              <p className="error-message">{clientErrors.password}</p>
          )}
          {backendErrors.password && (
              <p className="error-message">{backendErrors.password}</p>
          )}
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={() => dispatch(toggleRememberMe())}
          />
          <label htmlFor="remember-me">{t("signin.rememberme")}</label>
        </div>

        {backendErrors.general && (
          <p className="error-message">{backendErrors.general}</p>
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? t("signin.loginIn") : t("signin.login")}
        </Button>
      </form>
    </section>
  );
}

export default Form;
