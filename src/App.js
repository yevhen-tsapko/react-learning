import "./App.css";
import { useUserContext } from "./UserProvider";
function App() {
  return (
    <div>
      <p>
        {useUserContext().userName}{" "}
        {useUserContext().isLogIn ? "true" : "false"}
      </p>
      {console.log(useUserContext().userName)}
    </div>
  );
}

export default App;
