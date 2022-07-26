import axios from "axios";

const getDataAboutNotes = () => axios.get("http://localhost:3001/getNotes");
const deleteNote = (id: number) => axios.delete(`http://localhost:3001/deleteNote/${id}`);
const changeStatusOfNote = (obj: { id: number; status: string }) =>
  axios.patch("http://localhost:3001/changeStatus", obj);
const createNote = (obj: { note: string; status: string }) => axios.post("http://localhost:3001/createNote", obj);
export default { getDataAboutNotes, deleteNote, changeStatusOfNote, createNote };
