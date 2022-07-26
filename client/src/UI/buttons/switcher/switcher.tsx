import styles from "./switcher.module.scss";
import React, { useRef, useState } from "react";

const Switcher: React.FunctionComponent = () => {
  const body = document.getElementsByTagName("body");
  const [lighter, setLighter] = useState(false);
  const circle = useRef<any>();
  const handleClick = () => {
    setLighter(!lighter);
    if (lighter) {
      body[0].style.background = "#282A36";
      circle.current.style.right = "0";
    } else {
      body[0].removeAttribute("style");
      circle.current.removeAttribute("style");
    }
  };
  return (
    <div className={styles.switcher}>
      <div className={styles.circle} onClick={handleClick} ref={circle}></div>
    </div>
  );
};
export default Switcher;
