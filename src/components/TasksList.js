import { Task } from "./Task";
import css from "./TasksList.module.css";
export const TasksList = ({ tasks = [] }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
