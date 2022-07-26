import Column from "../column";
import React from "react";
import Card from "../../card/card";
import { useSelector } from "react-redux";
import { StoreState } from "../../../store/types";
import EmptyMessage from "../../../UI/emptyMessage/emptyMessage";

const Done: React.FunctionComponent = () => {
  const notesDone = useSelector((state: StoreState) => state.notes.notesDone);
  return (
    <Column title={"Done"}>
      {notesDone.length > 0 ? notesDone.map((el) => <Card el={el} key={el.id} />) : <EmptyMessage />}
    </Column>
  );
};
export default Done;
