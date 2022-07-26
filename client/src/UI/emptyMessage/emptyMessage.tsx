import React from "react";
import styles from "./emptyMessage.module.scss";

const EmptyMessage: React.FunctionComponent = () => {
  return <div className={styles.message}>Column is empty</div>;
};
export default EmptyMessage;
