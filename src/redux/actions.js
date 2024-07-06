import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addTask = createAction("task/addTask", (text) => ({
  payload: { text, id: nanoid(), completed: false },
}));
export const toggleCompleted = createAction("toggleCompleted");
export const removeTask = createAction("task/toggleCompleted");
export const setStatusFilter = createAction("setStatusFilter");
