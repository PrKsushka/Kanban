import Column from "../column";
import React, { useEffect, useState } from "react";
import Card from "../../card/card";
import EmptyMessage from "../../../UI/emptyMessage/emptyMessage";
import { useQuery } from "@apollo/client";
import { GET_DATA_ABOUT_NOTES } from "../../../graphQl/queries/getDataAboutNotes";
import { NoteType } from "../../../types/noteType";

const Done: React.FunctionComponent = () => {
  const { data, loading, error } = useQuery(GET_DATA_ABOUT_NOTES, {
    variables: { type: "done" },
  });
  const [doneNotes, setDoneNotes] = useState<Array<NoteType>>([]);
  useEffect(() => {
    if (!loading) {
      setDoneNotes((prev) => [...prev, ...data.getDataAboutNotes]);
      console.log("DONE", data);
    }
  }, [data]);
  return (
    <Column title={"Done"}>
      {doneNotes.length > 0 ? doneNotes.map((el) => <Card el={el} key={el.id} />) : <EmptyMessage error={error} />}
    </Column>
  );
};
export default Done;
