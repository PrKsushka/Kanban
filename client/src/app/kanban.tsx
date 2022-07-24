import React, { useState } from "react";
import styles from "./kanban.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createNewNote, deleteNote, moveNote } from "../store/notesWithoutAPI/notes.actions";
import { StoreState } from "../store/types";

const Kanban: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [result, setResult] = useState(false);
  const notes = useSelector((state: StoreState) => state.notes.notesToDo);
  const notesInProgress = useSelector((state: StoreState) => state.notes.notesInProgress);
  const notesDone = useSelector((state: StoreState) => state.notes.notesDone);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const sendNote = () => {
    setResult(true);
    dispatch(createNewNote({ id: Math.random(), status: "do", note: text }));
    setText("");
  };
  const deleteCurrentNote = (id: number) => {
    dispatch(deleteNote(id));
  };
  const startToDo = (id: number) => {
    dispatch(moveNote({ id, status: "progress" }));
  };
  const doneNote = (id: number) => {
    dispatch(moveNote({ id, status: "done" }));
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.mainText}>kanban</h3>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={sendNote}>Click</button>
      {result
        ? notes.map((el) => (
            <div key={el.id} style={{ background: "white", width: "200px", height: "200px", marginBottom: "20px" }}>
              <span>{el.note}</span>
              <button onClick={() => deleteCurrentNote(el.id)}>Delete</button>
              <button onClick={() => startToDo(el.id)}>Start</button>
            </div>
          ))
        : null}
      {notesInProgress
        ? notesInProgress.map((el) => (
            <div key={el.id}>
              <span>{el.note}</span>
              <button onClick={() => doneNote(el.id)}>Done</button>
            </div>
          ))
        : null}
      {notesDone
        ? notesDone.map((el) => (
            <div key={el.id}>
              <span>{el.note}</span>
            </div>
          ))
        : null}
    </div>
  );
};
export default Kanban;
