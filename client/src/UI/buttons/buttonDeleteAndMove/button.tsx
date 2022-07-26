import React from "react";
import styles from "./button.module.scss";

interface ButtonTypes {
  func: any;
  content: string;
  style: object;
}
const Button: React.FunctionComponent<ButtonTypes> = ({ func: f, content: c, style }) => {
  return (
    <button className={styles.button} style={style} onClick={f}>
      {c}
    </button>
  );
};
export default Button;
