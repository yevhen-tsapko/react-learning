import { useState } from "react";
import "./App.css";
import { City } from "./City";
import { CitiesList } from "./CitiesList";

const citiesList = [
  { name: "Kyiv", descrip: "capital" },
  { name: "Kharkiv", descrip: "firstCapital" },
];

function App() {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [cities, setCities] = useState(citiesList);

  const updateCurrentIndex = (newIndex) => {
    setCurrentCityIndex(newIndex);
  };
  const cityDescripChange = (text) => {
    const updatedCities = cities.map((city, index) => {
      if (index === currentCityIndex) {
        city.descrip = text;
      }
      return city;
    });
    setCities(updatedCities);
  };

  return (
    <div>
      <CitiesList citiesList={cities} updateCurrentIndex={updateCurrentIndex} />
      <City
        city={cities[currentCityIndex]}
        cityDescripChange={cityDescripChange}
      />
    </div>
  );
}

export default App;
