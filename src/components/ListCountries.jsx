import Country from './Country'
import "../scss/App.scss"

function ListCountries({filterCountry, selectContinent}) {

  return (
    <div>
    <h1>Lista de Países</h1>
    <ul className="items">
      {filterCountry.length > 0 ? (
        // Renderiza la lista filtrada por input
        filterCountry.map((country, index) => (
          <Country
            key={index}
            flag={country.flag}
            name={country.name.common}
            capital={country.capital}
            continents={country.continents}
          />
        ))
      ) : (
        // Renderiza la lista filtrada por selección de continente
        selectContinent.map((country, index) => (
          <Country
            key={index}
            flag={country.flag}
            name={country.name.common}
            capital={country.capital}
            continents={country.continents}
          />
        ))
      )}
    </ul>
  </div>
  );
}


export default ListCountries;