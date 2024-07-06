import { createReducer } from "@reduxjs/toolkit";
import { addTask, setStatusFilter } from "./actions";
import { statusFilters } from "./constants";

const taskInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];
const filtersInitialState = {
  status: statusFilters.all,
};
export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});

export const taskReducer = (state = taskInitialState, action) => {
  (builder) => {
    builder
      .addCase(task / addTask, (state, action) => {
        state.push(action.payload);
      })
      .addCase(task / removeTask, (state, action) => {
        return state.filter((task) => task.id !== action.payload);
      })
      .addCase(task / toggleCompleted, (state, action) => {
        for (task of state) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
          }
        }
      });
  };
};
