import Form from "../component/Form/Form";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import "./login.scss";

function Login() {
  return (
    <>
      <Header />
      <main className="bg-dark">
        <div className="wrap"></div>
        <Form />
      </main>
      <Footer />
    </>
  );
}
export default Login;
