import { useTranslation } from "react-i18next";
import './footer.scss';

function Footer() {

    const {t} = useTranslation();

  return (
    <footer className="footer">
      <p className="footer-text">{t("footer")}</p>
    </footer>
  );
}

export default Footer;