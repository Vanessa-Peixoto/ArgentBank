import Button from "../component/Button/Button";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Account from "../component/Account/Account";
import "./dashboard.scss";
import { useTranslation } from "react-i18next";

function Dashboard() {

    const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="bg-dark">
            <div className="header">
                <h1>{t("dashboard.welcome")}</h1>
                <Button type="submit" className='btn-edit-name'>{t("dashboard.btnName")}</Button>
            </div>
            <h2 className="sr-only">Accounts</h2>

            <Account
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
            />
            <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
            />
            <Account
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
            />
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
