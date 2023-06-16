// noteReducer.js

import { ADD_NOTE } from "./noteActions";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat(action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;