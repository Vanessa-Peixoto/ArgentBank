import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./form.scss";
import {
  updateUsername,
  updatePassword,
  toggleRememberMe,
} from "../../features/formSlice";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { useLoginMutation } from "../../services/authApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../features/authSlice";

function Form() {

  const { t } = useTranslation();

  //Hook redux, send actions to change the global state
  const dispatch = useDispatch();

  //Hook react router for redirect after connexion
  const navigate = useNavigate();

  //Hook redux, allow to read part of the global state
  //We select username, password, rememberMe from the formslice
  const { username, password, rememberMe } = useSelector((state) => state.form);

   //Hook RTK Query to trigger API call
   const [login, { isLoading}] = useLoginMutation();

   //store errors
   const [clientErrors, setClientErrors] = useState({});
   const [backendErrors, setBackendErrors] = useState({});

   //validate form
   const validateForm = () => {
    const errors = {};
    if(!username) {
        errors.username = t("signin.userError");
    }
    if(!password) {
        errors.password = t("signin.passwordError");
    }
    return errors;
   }

  //Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    //check if error in the form
    const errors = validateForm();
    if(Object.keys(errors).length > 0) {
        setClientErrors(errors);
        return;
    }

    //reset backend errors on each new attempt
    setBackendErrors({});

    try {
        const response = await login({ email: username, password }).unwrap();
        sessionStorage.setItem("token", response.token);
        dispatch(loginSuccess(response.user));
        navigate("/dashboard");
      } catch (err) {
        console.error("Failed to login:", err);
        if (err.status === 400) {
            if (err.data?.message.includes("Password is invalid")) {
              setBackendErrors({ password: "Le mot de passe est incorrect." });
            } else if (err.data?.message.includes("Email is invalid")) {
              setBackendErrors({ username: "L'adresse e-mail est incorrecte." });
            }
          } else {
            setBackendErrors({ general: "Une erreur est survenue. Réessayez plus tard." });
          }
      }
    };

  return (
    <section className="sign-in-content">
      <div className="container-title-form">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>{t("signin.login")}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">{t("signin.user")}</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
                dispatch(updateUsername(e.target.value));
                setClientErrors({...clientErrors, username: ""})
            }}/>
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
                setClientErrors({...clientErrors, password:""})
            }}/>
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
