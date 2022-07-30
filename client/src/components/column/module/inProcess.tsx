import React, { useEffect, useState } from "react";
import Column from "../column";
import Card from "../../card/card";
import styles from "../column.module.scss";
import Button from "../../../UI/buttons/buttonDeleteAndMove/button";
import butColor from "../../../UI/buttons/colorsForButtons.constants";
import EmptyMessage from "../../../UI/emptyMessage/emptyMessage";
import { useMutation, useQuery } from "@apollo/client";
import { MOVE_NOTE } from "../../../graphQl/mutations/moveNote";
import { GET_DATA_ABOUT_NOTES } from "../../../graphQl/queries/getDataAboutNotes";
import { NoteType } from "../../../types/noteType";

const InProcess: React.FunctionComponent = () => {
  const [moveNote] = useMutation(MOVE_NOTE);
  const { data, loading, error } = useQuery(GET_DATA_ABOUT_NOTES, { variables: { type: "progress" } });
  const [notesInProcess, setNotesInProcess] = useState<Array<NoteType>>([]);
  const doneNote = (id: number) => {
    moveNote({ variables: { moveNoteId: id, status: "done" } }).then((res) => {
      console.log(data);
    });
  };
  useEffect(() => {
    if (!loading) {
      setNotesInProcess((prev) => [...prev, ...data.getDataAboutNotes]);
      console.log("PROCESS", data);
    }
  }, [data]);
  return (
    <Column title={"In the process of doing"}>
      {notesInProcess.length > 0 ? (
        notesInProcess.map((el: NoteType) => (
          <Card el={el} key={el.id}>
            <div className={styles.wrapperForButtons}>
              <Button func={() => doneNote(el.id)} content={"Done"} style={{ background: butColor.darkPink }} />
            </div>
          </Card>
        ))
      ) : (
        <EmptyMessage error={error} />
      )}
    </Column>
  );
};
export default InProcess;
