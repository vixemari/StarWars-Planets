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
    setFilters({
      ...filters,
      filterByName: event.target.value,
    });
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Pesquisar"
        data-testid="name-filter"
        value={ filters.filterByName }
        onChange={ handleChange }
      />
    </section>
  );
}
export default FilterName;
