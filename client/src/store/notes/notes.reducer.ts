import { CREATE_NEW_NOTE, DELETE_NOTE, GET_DATA_ABOUT_NOTES, MOVE_NOTE } from "./notes.constants";
import { Note, NotesState } from "../types";

type Action = {
  type: string;
  payload?: unknown;
};
type PayloadMove = {
  arr: Array<Note>;
  status: string;
  moveStatus: string;
};
const initialState: NotesState = {
  notesToDo: [],
  notesInProgress: [],
  notesDone: [],
  deleteStatus: "",
  moveStatus: "",
  createStatus: "",
};
type PayloadGetData = [{ do: Array<Note> }, { progress: Array<Note> }, { done: Array<Note> }];
const notesReducer = (state = initialState, action: Action = { type: "DEFAULT" }) => {
  switch (action.type) {
    case GET_DATA_ABOUT_NOTES: {
      const payload = action.payload as PayloadGetData;
      return {
        ...state,
        notesToDo: [...payload[0].do],
        notesInProgress: [...payload[1].progress],
        notesDone: [...payload[2].done],
      };
    }
    case DELETE_NOTE: {
      return {
        ...state,
        deleteStatus: action.payload,
      };
    }
    case MOVE_NOTE: {
      const payload = action.payload as PayloadMove;
      return {
        ...state,
        moveStatus: payload.moveStatus,
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
