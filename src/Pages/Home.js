import React from 'react';
import FilterByName from '../Components/FilterByName';
import Table from '../Components/table';
import FilterByNumericValues from '../Components/FilterByNumericValues';

function Home() {
  return (
    <div>
      <h1>StarWars Planets</h1>
      <FilterByName />
      <FilterByNumericValues />
      <Table />
    </div>
  );
}
export default Home;
