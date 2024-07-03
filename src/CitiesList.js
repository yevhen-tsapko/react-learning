export const CitiesList = ({ citiesList, updateCurrentIndex }) => {
  return (
    <ul>
      {citiesList.map((city, index) => (
        <li
          key={city.name}
          onClick={() => {
            updateCurrentIndex(index);
          }}
        >
          <h3>{city.name}</h3>
          <p>{city.descrip}</p>
        </li>
      ))}
    </ul>
  );
};
