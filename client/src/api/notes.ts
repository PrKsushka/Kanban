import axios from "axios";

const getDataAboutNotes = () => {
  return axios.get("http://localhost:3001/getNotes");
};
//const getDataAboutNotesByStatus = (status: string) => axios.get(`http://localhost:3001/getNotes?status=${status}`);
const deleteNote = (id: number) => {
  return axios.delete(`http://localhost:3001/deleteNote/${id}`);
};
const changeStatusOfNote = (obj: { id: number; status: string }) => {
  console.log(obj.id);
  return axios.patch("http://localhost:3001/changeStatus", obj);
};
const createNote = (obj: { note: string; status: string }) => axios.post("http://localhost:3001/createNote", obj);
export default { getDataAboutNotes, deleteNote, changeStatusOfNote, createNote };
