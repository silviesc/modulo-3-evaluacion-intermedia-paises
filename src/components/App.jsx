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
      } catch (error) {
        console.error('Error al cargar los datos:', error.message);
      }
    };

    fetchData();
  }, []);

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  // const [select, setSelect] = useState('All');

  const filterCountry = countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()));
  // const selectContinent = countries.filter((country) => country.continents.toLowerCase().includes(select.toLowerCase));

  return (
    <>
      <Header/>
      <main>
        <Filter setFilter={setFilter}/>
        <ListCountries filterCountry={filterCountry}/>
      </main>
    </>
  )
}

export default App
