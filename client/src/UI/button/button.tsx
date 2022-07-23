import React from "react";
interface ButtonTypes {
  func: any;
  content: string;
}
const Button: React.FunctionComponent<ButtonTypes> = ({ func: f, content: c }) => {
  return <button onClick={f}>{c}</button>;
};
export default Button;
