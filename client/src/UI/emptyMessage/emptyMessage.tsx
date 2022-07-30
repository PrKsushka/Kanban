import React from "react";
import styles from "./emptyMessage.module.scss";

interface EmptyMessageTypes {
  error: any;
}

const EmptyMessage: React.FunctionComponent<EmptyMessageTypes> = ({ error }) => {
  return <div className={styles.message}>{error ? error : "Column is empty"}</div>;
};
export default EmptyMessage;
