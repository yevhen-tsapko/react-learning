import "./App.css";
import Basic from "./BasicForm";
import SignUpForm from "./InputForm";

function App() {
  return (
    <div>
      <SignUpForm onSubmit={(values) => console.log(values)} />
      <Basic />
    </div>
  );
}

export default App;
