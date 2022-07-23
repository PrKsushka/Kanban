import React, { useRef, useState } from "react";
import styles from "./kanban.module.scss";

const Kanban: React.FunctionComponent = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(false);
  const arr = useRef<Array<string>>([]);
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  const getResult = () => {
    setResult(true);
    arr.current.push(text);
    setText("");
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.mainText}>kanban</h3>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={getResult}>Click</button>
      {result ? arr.current.map((el, i) => <span key={i}>{el}</span>) : null}
    </div>
  );
};
export default Kanban;
