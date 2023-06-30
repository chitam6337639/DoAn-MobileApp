// noteActions.js
export const CLEAR_NOTES = "CLEAR_NOTES";
export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_NOTE ="UPDATE_NOTE";
export const DELETE_NOTE = 'DELETE_NOTE';
export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};
export const updateNote = (index, updatedNote) => {
  return {
    type: UPDATE_NOTE,
    payload: {
      index,
      updatedNote,
    },
  };
};

export const clearNotes = () => ({
    type: CLEAR_NOTES,
  });
  export const deleteNote = (index) => ({
    type: DELETE_NOTE,
    payload: index,
  });