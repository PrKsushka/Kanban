import { CREATE_NEW_NOTE, DELETE_NOTE, MOVE_NOTE } from "./notes.constants";

export function deleteNote(id: number) {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}

export function createNewNote(obj: { id: number; note: string; status: string }) {
  return {
    type: CREATE_NEW_NOTE,
    payload: obj,
  };
}

// export function getDataAboutNotes() {
//   return {
//     action: GET_DATA_ABOUT_NOTES,
//   };
// }

export function moveNote(obj: { id: number; status: string }) {
  return {
    type: MOVE_NOTE,
    payload: obj,
  };
}
