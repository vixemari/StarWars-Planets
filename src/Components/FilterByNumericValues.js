import React, { useContext } from 'react';
import StarwarsContext from '../Provider/Context';

export default function NumericFilter() {
  const { planets, setPlanetsCopia, filters, setFilters,
    column, setColumn, comparison, setComparison, valor,
    setValor, options, setOptions } = useContext(StarwarsContext);

  const columnOptions = () => {
    const colOp = options.filter((option) => option !== column);
    setOptions(colOp);
  };

  const filterPlanetsByNumber = () => {
    const planetsByNumber = planets.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(valor);
      } if (comparison === 'igual a') {
        return Number(planet[column]) === Number(valor);
      } if (comparison === 'menor que') {
        return Number(planet[column]) < Number(valor);
      }
      return planet[column] === Number(valor);
    });
    setPlanetsCopia(planetsByNumber);
    columnOptions();
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column,
          value: valor,
          comparison,
        },
      ],
    });
    filterPlanetsByNumber();
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {options.map((item) => (
          <option key={ item } value={ item }>
            {item}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valor }
        onChange={ ({ target: { value } }) => setValor(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>

  );
}
