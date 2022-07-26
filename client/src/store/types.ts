export type Note = {
  id: number;
  status: string;
  note: string;
};
export type NotesState = {
  notes: Array<Note>;
  deleteStatus: string;
  moveStatus: string;
  createStatus: string;
};
export type NotesStateIfWithoutAPI = {
  notesToDo: Array<Note>;
  notesInProgress: Array<Note>;
  notesDone: Array<Note>;
  deleteStatus: string;
  moveStatus: string;
  createStatus: string;
};
export interface StoreState {
  notes: NotesStateIfWithoutAPI;
}
