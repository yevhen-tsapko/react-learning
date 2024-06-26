import { Children } from "react";
const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "grey",
};
const getColor = (variant) => {
  switch (variant) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};
const Message = ({ variant, children }) => {
  return <p style={{ ...alertStyles, color: getColor(variant) }}>{children}</p>;
};
export default Message;
