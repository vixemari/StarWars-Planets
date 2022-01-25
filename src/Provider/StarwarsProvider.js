import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './Context';

function StarwarsProvider({ children }) {
  const [planets, setPlanets] = useState([]); // armazena o retorno da api
  const [planetsCopia, setPlanetsCopia] = useState([]); // armazena uma copia do retorno da API

  const filter = {
    filterByName: {
      name: '',
    },
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
