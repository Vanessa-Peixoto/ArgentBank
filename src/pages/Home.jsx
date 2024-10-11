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
            <h3 className="feature-item-title">{t("card.title.chat")}</h3>
            <p>{t("card.description.chat")}</p>
          </Card>
          <Card image={imgCardMoney}>
            <h3 className="feature-item-title">{t("card.title.money")}</h3>
            <p>{t("card.description.money")}</p>
          </Card>
          <Card image={imgCardSecurity}>
            <h3 className="feature-item-title">{t("card.title.security")}</h3>
            <p>{t("card.description.security")}</p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
