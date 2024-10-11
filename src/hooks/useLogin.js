import { useLoginMutation } from "../services/authApi";
import { loginSuccess } from "../features/authSlice";

/**
 * @description A custom hook for handling user login functionality.
 * @param {function} dispatch - The Redux dispatch function used to update the authentication state
 * @param {function} setClientErrors - Function to set client-side validation errors.
 * @param {function} setBackendErrors - Function to set backend response errors
 * @returns {Object} An object containing:
 *    {function} handleSubmit - Function to handle the form submission for login.
 *    {boolean} isLoading - Indicates if the login mutation is in progress.
 */
const useLogin = (dispatch, setClientErrors, setBackendErrors) => {
  
  //hook RTK Query create a mutation for the connection
  const [login, { isLoading }] = useLoginMutation();

  // Validate form inputs
  const validateForm = (username, password, t) => {
    const errors = {};
    if (!username) {
      errors.username = t("signin.userError");
    }
    if (!password) {
      errors.password = t("signin.passwordError");
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (username, password, t, navigate) => {
    const errors = validateForm(username, password, t);
    if (Object.keys(errors).length > 0) {
      setClientErrors(errors);
      return;
    }

    //reset backend error every time the user tries to log in
    setBackendErrors({});

    try {
      const response = await login({ email: username, password }).unwrap();
      sessionStorage.setItem("token", response.body.token);
      dispatch(loginSuccess(response.body.user));
      navigate("/profile");
    } catch (err) {
      if (err.status === 400) {
        if (err.data?.message.includes("Password is invalid")) {
          setBackendErrors({ password: "Le mot de passe est incorrect." });
        } else if (err.data?.message.includes("Email is invalid")) {
          setBackendErrors({ username: "L'adresse e-mail est incorrecte." });
        }
      } else {
        setBackendErrors({
          general: "Une erreur est survenue. Réessayez plus tard.",
        });
      }
    }
  };

  return { handleSubmit, isLoading };
};

export default useLogin;
