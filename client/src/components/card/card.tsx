import styles from "./card.module.scss";
import React from "react";
interface CardTypes {
  children?: JSX.Element | JSX.Element[];
  el: any;
}
const Card: React.FunctionComponent<CardTypes> = ({ children, el }) => {
  return (
    <div className={styles.card} key={el._id}>
      <span>{el.note}</span>
      {children}
    </div>
  );
};
export default Card;
