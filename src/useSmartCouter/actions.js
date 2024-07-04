import { INCREMENT, DECREMENT } from "./boilerplate";

export const incriase = (payload) => {
  return { type: INCREMENT, payload };
};

export const decriase = (payload) => {
  return { type: DECREMENT, payload };
};
