import "./App.css";
import Message from "./Message";

function App() {
  return (
    <>
      {" " && (
        <Message
          variant={"info"}
          outlined
          children={"Would you like to browse our recommended products?"}
        />
      )}
      {
        <Message
          variant={"success"}
          elevated
          children={"Would you like to browse our recommended products?"}
        />
      }

      <Message
        variant={"error"}
        children={"There was an error during transaction!"}
      />
    </>
  );
}

export default App;
