import PropTypes from "prop-types";
import "./button.scss";

function Button({ type = "button", children, className = "" }) {
  return (
    <button type={type} className={`sign-in-button ${className}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
