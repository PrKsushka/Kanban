import { CREATE_NEW_NOTE, DELETE_NOTE, GET_DATA_ABOUT_NOTES, MOVE_NOTE } from "./notes.constants";
import { Note, NotesState } from "../types";

type Action = {
  type: string;
  payload?: unknown;
};
const initialState: NotesState = {
  notes: [],
  deleteStatus: "",
  moveStatus: "",
  createStatus: "",
};
const notesReducer = (state = initialState, action: Action = { type: "DEFAULT" }) => {
  switch (action.type) {
    case GET_DATA_ABOUT_NOTES: {
      const payload = action.payload as Array<Note>;
      return {
        ...state,
        notes: [...payload],
      };
    }
    case DELETE_NOTE: {
      return {
        ...state,
        deleteStatus: action.payload,
      };
    }
    case MOVE_NOTE: {
      return {
        ...state,
        moveStatus: action.payload,
      };
    }
    case CREATE_NEW_NOTE: {
      return {
        ...state,
        createStatus: action.payload,
      };
    }
    default:
      return state;
  }
};
export default notesReducer;
