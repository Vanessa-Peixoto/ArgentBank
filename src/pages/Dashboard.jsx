import Button from "../component/Button/Button";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Account from "../component/Account/Account";
import "./dashboard.scss";
import { useTranslation } from "react-i18next";
import { useGetProfileMutation } from "../services/profileApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Dashboard() {

  const { t } = useTranslation();

  //retrieve user profil
  const [getProfile, { data, isLoading, error }] = useGetProfileMutation();

  //retrieve state to know if user is connected
  const isConnected = useSelector((state) => state.auth.isConnected);

  useEffect(() => {
    if (isConnected) {
      getProfile();
    }
  }, [getProfile, isConnected]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching profile: {error.message}</div>;
  }

  const firstName = data?.body?.firstName;

  return (
    <>
      <Header />
      <main className="bg-dark">
        <div className="header">
          <h1>{t("dashboard.welcome") + ' ' + firstName}</h1>
          <Button type="submit" className="btn-edit-name">
            {t("dashboard.btnName")}
          </Button>
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
