// noteActions.js
export const CLEAR_NOTES = "CLEAR_NOTES";
export const ADD_NOTE = "ADD_NOTE";

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const clearNotes = () => ({
    type: CLEAR_NOTES,
  });