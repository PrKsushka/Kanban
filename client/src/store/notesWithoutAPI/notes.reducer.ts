import { CREATE_NEW_NOTE, DELETE_NOTE, MOVE_NOTE } from "./notes.constants";
import { NotesStateIfWithoutAPI } from "../types";

type Action = {
  type: string;
  payload?: undefined;
};
const initialState: NotesStateIfWithoutAPI = {
  notesToDo: [],
  notesInProgress: [],
  notesDone: [],
  deleteStatus: "",
  moveStatus: "",
  createStatus: "",
};

const notesWithoutAPIReducer = (state = initialState, action: Action = { type: "DEFAULT" }) => {
  switch (action.type) {
    case DELETE_NOTE: {
      const id = action.payload;
      for (let i = 0; i < state.notesToDo.length; i++) {
        if (state.notesToDo[i].id === id) {
          state.notesToDo.splice(i, 1);
        }
      }
      return {
        ...state,
        notesToDo: [...state.notesToDo],
        deleteStatus: "deleted successfully",
      };
    }
    case MOVE_NOTE: {
      // @ts-ignore
      const { id, status } = action.payload;

      if (status === "progress") {
        for (let i = 0; i < state.notesToDo.length; i++) {
          if (state.notesToDo[i].id === id) {
            state.notesToDo[i].status = status;
          }
        }
        for (let i = 0; i < state.notesToDo.length; i++) {
          if (state.notesToDo[i].status === "progress") {
            state.notesInProgress.push(state.notesToDo[i]);
            state.notesToDo.splice(i, 1);
          }
        }
      } else if (status === "done") {
        for (let i = 0; i < state.notesInProgress.length; i++) {
          if (state.notesInProgress[i].id === id) {
            state.notesInProgress[i].status = status;
          }
        }
        for (let i = 0; i < state.notesInProgress.length; i++) {
          if (state.notesInProgress[i].status === "done") {
            state.notesDone.push(state.notesInProgress[i]);
            state.notesInProgress.splice(i, 1);
          }
        }
      }
      return {
        ...state,
        notesToDo: [...state.notesToDo],
        notesInProgress: [...state.notesInProgress],
        notesDone: [...state.notesDone],
        moveStatus: "moved successfully",
      };
    }

    case CREATE_NEW_NOTE: {
      const notes = state.notesToDo;
      if (action.payload) {
        notes.push(action.payload);
      }
      return {
        ...state,
        notesToDo: [...notes],
        createStatus: "created successfully",
      };
    }
    default:
      return state;
  }
};
export default notesWithoutAPIReducer;
