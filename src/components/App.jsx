import React, { useEffect, useState } from "react";
import "../scss/App.scss"
import Filter from "./Filter"
import Header from "./Header"
import ListCountries from "./ListCountries"

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data.json');
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        const data = await response.json();
        setCountries(data);
        setContinents(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error.message);
        throw error;
      }
    };

    fetchData();
  }, []);


  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [filter, setFilter] = useState('');
  const [select, setSelect] = useState('');

  const filterCountry = countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()));
  const selectContinent = continents.filter((continent) => continent.continents[0].toLowerCase() === select.toLowerCase());

  return (
    <>
      <Header/>
      <main>
        <Filter setFilter={setFilter} setSelect={setSelect}/>
        <ListCountries filterCountry={filterCountry} selectContinent={selectContinent}/>
      </main>
    </>
  )
}

export default App
