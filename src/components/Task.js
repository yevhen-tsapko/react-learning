import css from "./Task.module.css";
import { MdClose } from "react-icons/md";

export const Task = ({ task }) => {
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        checked={task.completed}
        className={css.checkbox}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" className="css.btn">
        <MdClose size={24} />
      </button>
    </div>
  );
};
