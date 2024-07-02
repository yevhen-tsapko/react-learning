import css from "./TaskForm.module.css";
import { Button } from "./Button";
export const TaskForm = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };
  return (
    <form onSubmit={handlerSubmit} className={css.form}>
      <input
        type="text"
        name="text"
        className={css.field}
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
