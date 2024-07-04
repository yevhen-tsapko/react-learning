import { useReducer } from "react";
import { incriase, decriase } from "./actions";
import { reducer } from "./reducer";

export const useSmartCounter = ({ n = 0 }) => {
  const [state, dispatch] = useReducer(reducer, { counter: n });

  return {
    counter: state.counter,
    remove1: dispatch(incriase(1)),
    remove2: dispatch(incriase(2)),
    add1: dispatch(decriase(1)),
    add2: dispatch(decriase(2)),
  };
};
