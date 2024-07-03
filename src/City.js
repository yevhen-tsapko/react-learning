export const City = ({ city, cityDescripChange }) => {
  const { name, descrip } = city;

  const handleChange = (evt) => {
    cityDescripChange(evt.target.value);
  };

  return (
    <>
      <h2>{name}</h2>
      <input type="textarea" onChange={handleChange} value={descrip} />
    </>
  );
};
