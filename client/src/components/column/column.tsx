import React from "react";
import styles from "./column.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
}
const Column: React.FunctionComponent<Props> = ({ children, title }) => {
  return (
    <div className={styles.column}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};
export default Column;
