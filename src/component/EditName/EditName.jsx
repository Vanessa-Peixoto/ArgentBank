import { useEdit } from '../../hooks/useEdit';
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./editname.scss";

/**
 * @component
 * @description A component for editing the user's first and last name
 * @param {string} props.firstName - the current firstname of the user
 * @param {string} props.lastName - the current lastname of the user
 * @param {function} props.onUpdate - Callback function to handle the updated names
 * @param {function} props.refreshProfile - Callback function to refresh the user's profile after updating
 * @returns {JSX.Element} EditName component
 */
function EditName({ firstName, lastName, onUpdate, refreshProfile }) {

  const { t } = useTranslation();

  const {
    editMode,
    newFirstName,
    newLastName,
    isLoading,
    error,
    handleEditClick,
    handleCancelClick,
    handleSubmit,
    setNewFirstName,
    setNewLastName,
  } = useEdit(firstName, lastName, onUpdate, refreshProfile);
  
  return (
    <div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div className="wrapper-input">
            <div>
              <input
                className="input-item"
                type="text"
                placeholder={firstName}
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="input-item"
                type="text"
                placeholder={lastName}
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="wrapper-btn">
            <Button type="submit" className="btn-save edit-button">
              {isLoading ? "En cours..." : t("dashboard.btnSave")}
            </Button>

            <Button
              type="button"
              className="btn-cancel edit-button"
              onClick={handleCancelClick}
            >
              {t("dashboard.btnCancel")}
            </Button>
          </div>

          {error && <div>Erreur: {error.message}</div>}
        </form>
      ) : (
        <Button
          type="button"
          className="btn-edit-name edit-button"
          onClick={handleEditClick}
        >
          {t("dashboard.btnName")}
        </Button>
      )}
    </div>
  );
}

EditName.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onUpdate: PropTypes.func,
  refreshProfile: PropTypes.func,
};

export default EditName;
