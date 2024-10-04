import PropTypes from "prop-types";
import "./button.scss";

function Button({ type = "button", children }) {
  return (
    <button type={type} className="sign-in-button">
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
