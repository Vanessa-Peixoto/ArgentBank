import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./form.scss";
import {
  updateUsername,
  updatePassword,
  toggleRememberMe,
  submitForm,
} from "../../features/formSlice";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

function Form() {
    
  const { t } = useTranslation();

  //Hook redux, send actions to change the global state
  const dispatch = useDispatch();

  //Hook redux, allow to read part of the global state
  //We select username, password, rememberMe from the formslice
  const { username, password, rememberMe } = useSelector((state) => state.form);

  //Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
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
            onChange={(e) => dispatch(updateUsername(e.target.value))}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">{t("signin.password")}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => dispatch(updatePassword(e.target.value))}
          />
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
        <Button type="submit">{t("signin.login")}</Button>
      </form>
    </section>
  );
}

export default Form;
