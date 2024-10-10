import PropTypes from "prop-types";
import "./button.scss";

function Button({ type = "button", children, className = "" , onClick}) {
  return (
    <button type={type} className={`sign-in-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
