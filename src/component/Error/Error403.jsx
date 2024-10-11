import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './error403.scss';

/**
 * @component
 * @returns {JSX.Element} Error403 component
 */
function Error403() {

    const {t} = useTranslation();

  return (
    <div className="wrap-error">
      <h1>{t("error.error403")}</h1>
      <p>{t("error.error403-description")}</p>
      <Link to="/">{t("error.error403-link")}</Link>
    </div>
  );
}

export default Error403;