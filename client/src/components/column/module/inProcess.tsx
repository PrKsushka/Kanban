import React from "react";
import Column from "../column";
import Card from "../../card/card";
import styles from "../column.module.scss";
import Button from "../../../UI/buttons/buttonDeleteAndMove/button";
import butColor from "../../../UI/buttons/colorsForButtons.constants";
import { moveNote } from "../../../store/notesWithoutAPI/notes.actions";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../store/types";
import EmptyMessage from "../../../UI/emptyMessage/emptyMessage";

const InProcess: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const notesInProgress = useSelector((state: StoreState) => state.notes.notesInProgress);
  const doneNote = (id: number) => {
    dispatch(moveNote({ id, status: "done" }));
  };
  return (
    <Column title={"In the process of doing"}>
      {notesInProgress.length > 0 ? (
        notesInProgress.map((el) => (
          <Card el={el} key={el.id}>
            <div className={styles.wrapperForButtons}>
              <Button func={() => doneNote(el.id)} content={"Done"} style={{ background: butColor.darkPink }} />
            </div>
          </Card>
        ))
      ) : (
        <EmptyMessage />
      )}
    </Column>
  );
};
export default InProcess;
