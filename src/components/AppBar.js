import css from "./AppBar.module.css";
import { TaskCounter } from "./TaskCounter.js";
import { StatusFilter } from "./StatusFilter.js";
export const AppBar = ({ children }) => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
