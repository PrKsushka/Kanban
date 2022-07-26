import React from "react";
import styles from "./addButton.module.scss";

type Func = () => void;
interface AddButtonTypes {
  func: Func;
}

const AddButton: React.FunctionComponent<AddButtonTypes> = ({ func }) => {
  return (
    <button onClick={func} className={styles.addButton}>
      Add
    </button>
  );
};
export default AddButton;
