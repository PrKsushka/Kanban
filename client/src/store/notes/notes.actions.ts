import { Dispatch, Action } from "redux";
import note from "../../api/notes";
import { CREATE_NEW_NOTE, DELETE_NOTE, GET_DATA_ABOUT_NOTES, MOVE_NOTE } from "./notes.constants";

export function deleteNote(id: number) {
  return (dispatch: Dispatch<Action>) => {
    note
      .deleteNote(id)
      .then((res) => {
        dispatch({ type: DELETE_NOTE, payload: res.data.message });
      })
      .catch((e) => {});
  };
}

export function createNewNote(obj: { note: string; status: string }) {
  return (dispatch: Dispatch<Action>) => {
    note
      .createNote(obj)
      .then((res) => {
        dispatch({ type: CREATE_NEW_NOTE, payload: res.data.message });
      })
      .catch((e) => {});
  };
}

export function getDataAboutNotes() {
  return (dispatch: Dispatch<Action>) => {
    note
      .getDataAboutNotes()
      .then((res) => {
        if (res.data) {
          dispatch({
            type: GET_DATA_ABOUT_NOTES,
            payload: res.data,
          });
        } else {
          throw Error();
        }
      })
      .catch((e) => {});
  };
}

export function moveNote(obj: { id: number; status: string }) {
  return (dispatch: Dispatch<Action>) => {
    note
      .changeStatusOfNote(obj)
      .then((res) => {
        dispatch({ type: MOVE_NOTE, payload: res.data.message });
      })
      .catch((e) => {});
  };
}
