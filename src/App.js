import "./App.css";
import Message from "./Message";
import BookList from "./component-1";
const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];
function App() {
  return (
    <>
      {2 && <BookList books={favouriteBooks} />}
      {3 > 2 ? <BookList books={favouriteBooks} /> : <p>Any book</p>}
      {" " && (
        <Message
          variant={"info"}
          children={"Would you like to browse our recommended products?"}
        />
      )}
      {
        <Message
          variant={"success"}
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
