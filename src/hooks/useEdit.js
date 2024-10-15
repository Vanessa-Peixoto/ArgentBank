import { useState } from "react";
import { useUpdateProfileMutation } from "../services/updateProfileApi";

/**
 * Custom hook to handle logic for editing user's first and last name.
 * @param {string} initialFirstName - The initial first name of the user.
 * @param {string} initialLastName - The initial last name of the user.
 * @param {function} onUpdate - Callback function to handle profile update.
 * @param {function} refreshProfile - Callback function to refresh the profile after updating.
 * @returns {object} Object containing the state, handlers and the update profile mutation.
 */
export const useEdit = (firstName, lastName, onUpdate, refreshProfile) => {
  const [editMode, setEditMode] = useState(false);
  const [newFirstName, setNewFirstName] = useState(firstName || "");
  const [newLastName, setNewLastName] = useState(lastName || "");
  const [updateProfile, { isLoading, error }] = useUpdateProfileMutation();

  // Switch to edit mode
  const handleEditClick = () => setEditMode(true);

  // Cancel the edit and reset fields
  const handleCancelClick = () => {
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setEditMode(false);
  };

  // Handle form submission to update the user's name
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        //prepare data
      const updatedData = {
        firstName: newFirstName || firstName,
        lastName: newLastName || lastName,
      };
      //send update request with data
      await updateProfile(updatedData).unwrap();

      //Update local state with the new data
      onUpdate(updatedData);

      //Refresh the profile to ensure the data is up to date
      await refreshProfile();
      setEditMode(false);
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  return {
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
  };
};
