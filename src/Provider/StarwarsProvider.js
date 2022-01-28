import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './Context';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]); // armazena o retorno da api
  const [planetsCopia, setPlanetsCopia] = useState([]); // armazena uma copia do retorno da API
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState(0);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const filter = {
    filterByName: '',
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  };
  const [filters, setFilters] = useState([filter]);

  const fetchPlanets = async () => {
    const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await fetchAPI.json();
    setPlanets(data.results);
    setPlanetsCopia(data.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    planetsCopia,
    setPlanetsCopia,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    valor,
    setValor,
    options,
    setOptions,
  };
  return (
    <StarwarsContext.Provider value={ contextValue }>
      { children }
    </StarwarsContext.Provider>
  );
}
StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
