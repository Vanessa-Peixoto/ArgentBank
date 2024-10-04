import Banner from "../component/Banner/Banner";
import Card from "../component/Card/Card";
import Header from "../component/Header/Header";
import imgCardSecurity from "../assets/images/icon-security.png";
import imgCardChat from "../assets/images/icon-chat.png";
import imgCardMoney from "../assets/images/icon-money.png";
import { useTranslation } from "react-i18next";
import "../component/Card/card.scss";
import "./home.scss";
import Footer from "../component/Footer/Footer";


function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <Banner />
        <div className="container-card">
          <Card image={imgCardChat}>
            <h3 className="feature-item-title">{t("card-info1-title")}</h3>
            <p>{t("card-info1-description")}</p>
          </Card>
          <Card image={imgCardMoney}>
            <h3 className="feature-item-title">{t("card-info2-title")}</h3>
            <p>{t("card-info2-description")}</p>
          </Card>
          <Card image={imgCardSecurity}>
            <h3 className="feature-item-title">{t("card-info3-title")}</h3>
            <p>{t("card-info3-description")}</p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
