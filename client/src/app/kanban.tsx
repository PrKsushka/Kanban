import React, { useEffect, useState } from "react";
import styles from "./kanban.module.scss";
import { useDispatch } from "react-redux";
import { createNewNote, getDataAboutNotes } from "../store/notes/notes.actions";
import AddButton from "../UI/buttons/addButton/addButton";
import Switcher from "../UI/buttons/switcher/switcher";
import ToDo from "../components/column/module/toDo";
import InProcess from "../components/column/module/inProcess";
import Done from "../components/column/module/done";

const Kanban: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  useEffect(() => {
    dispatch(getDataAboutNotes());
  }, []);
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const sendNote = () => {
    if (text !== "") {
      dispatch(createNewNote({ note: text, status: "do" }));
    } else {
      alert("Please enter words");
    }
    setText("");
  };
  const sendNoteOnEnter = (e: any) => {
    if (e.code === "Enter") {
      sendNote();
    }
  };
  return (
    <div className={styles.wrapper}>
      <Switcher />
      <div className={styles.header}>
        <h3 className={styles.mainText}>kanban</h3>
        <div className={styles.blockForCreatingNote}>
          <input
            type="text"
            onChange={handleChange}
            value={text}
            className={styles.inputForEnteringText}
            onKeyDown={(e) => sendNoteOnEnter(e)}
          />
          <AddButton func={sendNote} />
        </div>
      </div>
      <div className={styles.wrapperForColumns}>
        <ToDo />
        <InProcess />
        <Done />
      </div>
    </div>
  );
};
export default Kanban;
