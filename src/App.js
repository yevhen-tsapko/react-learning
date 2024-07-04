import { useSmartCounter } from "./useSmartCouter";
function App() {
  const { counter, remove1, remove2, add1, add2 } = useSmartCounter(3);
  return (
    <div>
      <button type="button" onClick={remove1}>
        -1
      </button>
      <button type="button" onClick={remove2}>
        -2
      </button>
      <p>{counter}</p>
      <button type="button" onClick={add1}>
        +1
      </button>
      <button type="button" onClick={add2}>
        +2
      </button>
    </div>
  );
}

export default App;
