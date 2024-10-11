import PropTypes from "prop-types";
import "./button.scss";

/**
 * @component
 * @param {string} props.type - The type of the button element
 * @param {React.ReactNode} props.children - The content to be displayed inside the button
 * @param {string} props.className - Additional CSS classes to be added to the button for styling
 * @param {function} props.onClick - The callback function to handle the button's `onClick` event
 * @returns {JSX.Element} Button component
 */
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
