import EditName from "../component/EditName/EditName";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Account from "../component/Account/Account";
import "./dashboard.scss";
import { useTranslation } from "react-i18next";
import { useGetProfileMutation } from "../services/profileApi";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { checkTokenValidity } from "../actions/authAction";

function Dashboard() {
  
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //stock user info
  const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "" });

  //retrieve user profil
  const [getProfile, { data, isLoading, error }] = useGetProfileMutation();

  //retrieve state to know if user is connected
  const isConnected = useSelector((state) => state.auth.isConnected);

  useEffect(() => {
    dispatch(checkTokenValidity());

    if (!isConnected) {
      navigate("/403");
    } else {
      getProfile();
    }
  }, [getProfile, isConnected, navigate, dispatch]);

  //update local state when data changes
  useEffect(() => {
    if (data && data.body) {
      setUserInfo({
        firstName: data?.body?.firstName,
        lastName: data?.body?.lastName,
      });
    }
  }, [data]);

  const refreshProfile = () => {
    getProfile();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching profile: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <main className="bg-dark">
        <div className="header">
          <h1>
            {t("dashboard.welcome") +
              " " +
              userInfo.firstName +
              " " +
              userInfo.lastName}
          </h1>
          <EditName
            firstName={userInfo.firstName}
            lastName={userInfo.lastName}
            onUpdate={setUserInfo}
            refreshProfile={refreshProfile}
          />
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
