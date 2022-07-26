import React, { useRef, useState } from "react";
import styles from "./kanban.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createNewNote, deleteNote, moveNote } from "../store/notesWithoutAPI/notes.actions";
import { StoreState } from "../store/types";
import randomInteger from "../utils/functionForGeneratingRandomNum";
import Card from "../components/card/card";
import Button from "../UI/buttons/buttonDeleteAndMove/button";
import AddButton from "../UI/buttons/addButton/addButton";
import butColor from "../UI/buttons/colorsForButtons.constants";
import Switcher from "../UI/buttons/switcher/switcher";
import ToDo from "../components/column/module/toDo";
import InProcess from "../components/column/module/inProcess";
import Done from "../components/column/module/done";

const Kanban: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [result, setResult] = useState(false);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const sendNote = () => {
    setResult(true);
    if (text !== "") {
      dispatch(createNewNote({ id: randomInteger(0, 100), status: "do", note: text }));
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
