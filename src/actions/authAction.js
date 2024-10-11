import { restoreSession, logout } from "../features/authSlice";

// Action pour vérifier la validité du token
export const checkTokenValidity = () => (dispatch) => {
  const token = sessionStorage.getItem("token"); // Récupérer le token du sessionStorage
  if (token) {
    const isValid = isValidToken(token); // Vérifier la validité du token
    if (isValid) {
      const user = JSON.parse(sessionStorage.getItem("user")); // Décoder le token pour obtenir les informations de l'utilisateur
      dispatch(restoreSession(user)); // Restaurer la session
    } else {
      dispatch(logout()); // Si le token n'est pas valide, déconnecter l'utilisateur
    }
  } else {
    dispatch(logout()); // Pas de token, donc déconnexion
  }
};

const isValidToken = () => {
  return true;
};
