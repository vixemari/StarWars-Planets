import React, { useContext } from 'react';
import StarwarsContext from '../Provider/Context';

function FilterName() {
  const { setFilters, filters, planets, setPlanetsCopia } = useContext(StarwarsContext);

  const filterPlanetsByName = (name) => {
    const lowerBusca = name.toLowerCase();
    const filterPlanets = planets
      .filter((planet) => planet.name.toLowerCase()
        .includes(lowerBusca));
    setPlanetsCopia(filterPlanets);
  };

  const handleChange = (event) => {
    filterPlanetsByName(event.target.value);
    setFilters({ filterByName: event.target.value });
  };

  return (
    <section
      className="d-flex justify-content-around
    align-items-center p-2"
    >
      <input
        type="text"
        placeholder="Pesquisar"
        data-testid="name-filter"
        value={ filters.filterByName }
        onChange={ handleChange }
        className="form-control"
      />
    </section>
  );
}
export default FilterName;
