// noteReducer.js

import { ADD_NOTE ,CLEAR_NOTES,UPDATE_NOTE,DELETE_NOTE} from "./noteActions";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes:  [...state.notes, action.payload],
      };
      case CLEAR_NOTES:
      return {
        ...state,
        notes: [],
      };
      case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, index) => index !== action.payload),
      };
      case UPDATE_NOTE:
        const { index, updatedNote } = action.payload;
        const updatedNotes = [...state.notes];
        updatedNotes[index] = updatedNote;
        return {
          ...state,
          notes: updatedNotes,
        };
    default:
      return state;
  }
};

export default noteReducer;