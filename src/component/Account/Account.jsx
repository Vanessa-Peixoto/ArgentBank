import Button from "../Button/Button";
import PropTypes from "prop-types";
import './account.scss';
import { useTranslation } from "react-i18next";

/**
 * @component
 * @param {string} props.title - Transaction title
 * @param {string} props.amount - Transaction amount
 * @param {string} props.description - Transaction description
 * @returns {JSX.Element} Account component
 */
function Account({ title, amount, description }) {
    const { t } = useTranslation();
    
  return (
    <section className="account">
      <div>
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div>
        <Button type="submit" className='edit-button'>{t("dashboard.btnTransaction")}</Button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;
