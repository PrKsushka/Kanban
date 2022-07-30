import Column from "../column";
import Card from "../../card/card";
import styles from "../column.module.scss";
import Button from "../../../UI/buttons/buttonDeleteAndMove/button";
import butColor from "../../../UI/buttons/colorsForButtons.constants";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_NOTE } from "../../../graphQl/mutations/deleteNote";
import { MOVE_NOTE } from "../../../graphQl/mutations/moveNote";
import { GET_DATA_ABOUT_NOTES } from "../../../graphQl/queries/getDataAboutNotes";
import { NoteType } from "../../../types/noteType";
import EmptyMessage from "../../../UI/emptyMessage/emptyMessage";

interface ToDoTypes {
  note?: NoteType;
}

const ToDo: React.FunctionComponent<ToDoTypes> = ({ note }) => {
  const [deleteNote] = useMutation(DELETE_NOTE);
  const [moveNote] = useMutation(MOVE_NOTE);
  const [toDoNotes, setToDoNotes] = useState<Array<NoteType>>([]);
  const [clickHandler, setClickHandler] = useState(false);
  const { refetch, data, loading, error } = useQuery(GET_DATA_ABOUT_NOTES, { variables: { type: "do" } });
  useEffect(() => {
    if (!loading) {
      if (note) {
        setToDoNotes((prev) => [...prev, note]);
      }
      if (clickHandler) {
        refetch().then((res) => {
          setToDoNotes((prev) => [...res.data.getDataAboutNotes]);
        });
      } else {
        setToDoNotes((prev) => [...prev, ...data.getDataAboutNotes]);
      }
    }
  }, [data, note, clickHandler]);
  const deleteCurrentNote = (id: number) => {
    deleteNote({ variables: { deleteNoteId: id } });
  };
  const startToDo = (id: number) => {
    moveNote({ variables: { moveNoteId: id, status: "progress" } });
    setClickHandler(!clickHandler);
  };
  return (
    <Column title={"To do"}>
      {toDoNotes.length > 0 ? (
        toDoNotes.map((el: NoteType) => (
          <Card el={el} key={el.id}>
            <div className={styles.wrapperForButtons}>
              <Button
                func={() => deleteCurrentNote(el.id)}
                content={"Delete"}
                style={{ background: butColor.green, marginRight: "19px" }}
              />
              <Button func={() => startToDo(el.id)} content={"Start"} style={{ background: butColor.darkPink }} />
            </div>
          </Card>
        ))
      ) : (
        <EmptyMessage error={error} />
      )}
    </Column>
  );
};
export default ToDo;
