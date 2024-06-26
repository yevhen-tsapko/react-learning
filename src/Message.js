import { Children } from "react";
import "./Message.css";

const Message = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];
  if (outlined) classNames.push("is-outlined");
  if (elevated) classNames.push("is-elevated");
  console.log("classNames", classNames);
  return <p className={classNames.join(" ")}>{children}</p>;
};
export default Message;
