import { useState } from "react";
const Counter = () => {
  const [step, setStep] = useState(1);
  const [sum, setSum] = useState(0);
  const setNumber = (evt) => {
    setStep(+evt.target.value);
  };
  const increaceSum = () => {
    setSum(+sum + step);
  };
  const decreaceSum = () => {
    setSum(+sum - step);
  };
  return (
    <>
      <label>
        Enter step
        <input type="number" onChange={setNumber} value={step} />
      </label>
      <p>total number: {sum}</p>
      <button type="button" onClick={increaceSum}>
        {" "}
        Increace by {step}
      </button>
      <button type="button" onClick={decreaceSum}>
        {" "}
        Decreace by {step}
      </button>
    </>
  );
};
export default Counter;
