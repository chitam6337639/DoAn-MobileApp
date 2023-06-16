// noteReducer.js

import { ADD_NOTE ,CLEAR_NOTES} from "./noteActions";

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
      case CLEAR_NOTES:
      return {
        ...state,
        notes: [],
      };
    default:
      return state;
  }
};

export default noteReducer;