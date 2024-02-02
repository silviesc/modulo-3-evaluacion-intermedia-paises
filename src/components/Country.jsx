import "../scss/App.scss"

function Country({ flag, name, capital, continents }) {
  return (
    <li className="one__item">
      <i>{flag}</i>
      <h4>{name}</h4>
      <p>{capital}</p>
      <p>{continents}</p>
    </li>
  );
}

export default Country;
