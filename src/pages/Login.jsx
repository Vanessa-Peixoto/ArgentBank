import Form from "../component/Form/Form";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import './login.scss';

function Login() {
  return (
    <>
      <Header />
      <main className="bg-dark">
        <Form />
      </main>
      <Footer />
    </>
  );
}
export default Login;
