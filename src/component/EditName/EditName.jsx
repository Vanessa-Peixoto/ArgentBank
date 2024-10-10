import { useState } from "react";
import { useUpdateProfileMutation } from "../../services/updateProfileApi";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function EditName({ firstName, lastName, onUpdate, refreshProfile }) {

  const [editMode, setEditMode] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName || "");
  const [newLastName, setNewLastName] = useState(lastName || "");

  //Mutation to update user profile
  const [updateProfile, { isLoading, error }] = useUpdateProfileMutation();

  const handleEditClick = () => {
    setEditMode(true);
  }

  const handleCancelClick = () => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setEditMode(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({
        firstName: newFirstName,
        lastName: newLastName,
      }).unwrap();

      onUpdate({
        firstName: firstName,
        lastName: lastName,
      })

      await refreshProfile();

      setEditMode(false);

    } catch (err) {
      console.error("Erreur lors de la mise à jour du profil :", err);
    }
  }

  return (
    <div>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div>
                <input
                type="text"
                placeholder={firstName}
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                />
          </div>
          <div>
                <input
                type="text"
                placeholder={lastName}
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                />
          </div>

          <Button type="submit" className="btn-save">
            {isLoading ? "En cours..." : "Sauvegarder"}
          </Button>

          <Button type="button" className="btn-cancel" onClick={handleCancelClick}>
            Annuler
          </Button>

          {error && <div className="error">Erreur: {error.message}</div>}
        </form>
      ) : (
        <Button type="button" onClick={handleEditClick}>
          Edit Name
        </Button>
      )}
    </div>
  );
}

Button.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onUpdate: PropTypes.func,
  refreshProfile: PropTypes.func,
};

export default EditName;
