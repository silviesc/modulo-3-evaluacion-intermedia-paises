function Filter({setFilter, setSelect}) {

  return (
    <div>
      <h2>Filters</h2>
      <form>
        <label>By Country</label>
        <input type="text" placeholder="Spain" onChange={(ev) => setFilter(ev.target.value)}/>
        <label>By Continent</label>
        <select name="continent" id="continent" onChange={(ev) => setSelect(ev.target.value)}>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="northAmerica">North America</option>
          <option value="southAmerica">South America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}

export default Filter;
