import "./App.css";
import SignUpForm from "./InputForm";

function App() {
  return (
    <div>
      <SignUpForm onSubmit={(values) => console.log(values)} />
    </div>
  );
}

export default App;
