export type Note = {
  id?: number;
  _id: number;
  status: string;
  note: string;
};

export type NotesState = {
  notesToDo: Array<Note>;
  notesInProgress: Array<Note>;
  notesDone: Array<Note>;
  deleteStatus: string;
  moveStatus: string;
  createStatus: string;
};
export interface StoreState {
  notes: NotesState;
}
