const itemStyle = {
  margin: 16,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "green",
};
const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li style={itemStyle} key={book.id}>
          {book.name}
        </li>
      ))}
    </ul>
  );
};
export default BookList;
