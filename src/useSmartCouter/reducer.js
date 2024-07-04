import { DECREMENT, INCREMENT } from "./boilerplate";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    default:
      return { ...state };
  }
};
