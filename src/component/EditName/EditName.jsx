import { useState } from "react";
import { useUpdateProfileMutation } from "../../services/updateProfileApi";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import './editname.scss';

function EditName({ firstName, lastName, onUpdate, refreshProfile }) {

  const {t} = useTranslation();
  const [editMode, setEditMode] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName || "");
  const [newLastName, setNewLastName] = useState(lastName || "");

  //Mutation to update user profile
  const [updateProfile, { isLoading, error }] = useUpdateProfileMutation();

  //show form
  const handleEditClick = () => {
    setEditMode(true);
  };

  //hide form
  const handleCancelClick = () => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setEditMode(false);
  };

  //submit form and update user info
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({
        firstName: newFirstName,
        lastName: newLastName,
      }).unwrap();

      onUpdate({
        firstName: newFirstName,
        lastName: newLastName,
      });

      await refreshProfile();

      setEditMode(false);

    } catch (err) {
      console.error("Erreur lors de la mise à jour du profil :", err);
    }
  };

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
        <Button type="button" className="btn-edit-name edit-button" onClick={handleEditClick}>
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
