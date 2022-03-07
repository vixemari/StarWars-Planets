import React, { useContext } from 'react';
import StarwarsContext from '../Provider/Context';

export default function NumericFilter() {
  const { planets, setPlanetsCopia, setFilters,
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
    <div
      className="d-flex justify-content-around
    align-items-center p-2 mb-3"
    >
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ ({ target: { value } }) => setColumn(value) }
        className="form-select form-select-sm form-control"
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
        className="form-select form-select-sm form-control"
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
        className="form-control"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
        className="btn btn-primary mx-3 "
      >
        Filtrar
      </button>
    </div>

  );
}
