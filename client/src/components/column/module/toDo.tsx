import Column from "../column";
import Card from "../../card/card";
import styles from "../column.module.scss";
import Button from "../../../UI/buttons/buttonDeleteAndMove/button";
import butColor from "../../../UI/buttons/colorsForButtons.constants";
import React, { useState } from "react";
import { deleteNote, getDataAboutNotes, moveNote } from "../../../store/notes/notes.actions";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../store/types";
import EmptyMessage from "../../../UI/emptyMessage/emptyMessage";

const ToDo: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: StoreState) => state.notes.notesToDo);
  const deleteCurrentNote = (id: number) => {
    dispatch(deleteNote(id));
  };
  const startToDo = (id: number) => {
    dispatch(
      moveNote({
        id,
        status: "progress",
      })
    );
  };
  return (
    <Column title={"To do"}>
      {notes.length > 0 ? (
        notes.map((el) => (
          <Card el={el} key={el._id}>
            <div className={styles.wrapperForButtons}>
              <Button
                func={() => deleteCurrentNote(el._id)}
                content={"Delete"}
                style={{ background: butColor.green, marginRight: "19px" }}
              />
              <Button func={() => startToDo(el._id)} content={"Start"} style={{ background: butColor.darkPink }} />
            </div>
          </Card>
        ))
      ) : (
        <EmptyMessage />
      )}
    </Column>
  );
};
export default ToDo;
