
import "../scss/App.scss"

function ListCountries({filterCountry, selectContinent}) {

  return (
    <div>
      <h1>Lista de Países</h1>
      <ul className="items">{filterCountry.map((country, index) => (
          <li key={index} className="one__item">
            <i>{country.flag}</i>
            <h6>{country.name.common}</h6>
            <p>{country.capital}</p>
            <p>{country.continents}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default ListCountries;