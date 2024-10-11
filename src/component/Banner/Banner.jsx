import "./banner.scss";
import { useTranslation } from "react-i18next";

/**
 * @component
 * @returns Banner component
 */
function Banner() {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">{t("home.advantage1")}</p>
        <p className="subtitle">{t("home.advantage2")}</p>
        <p className="subtitle">{t("home.advantage3")}</p>
        <p className="text">{t("home.advantage4")}</p>
      </section>
    </div>
  );
}

export default Banner;
