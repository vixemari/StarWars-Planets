import React from 'react';
import FilterByName from '../Components/FilterByName';
import Table from '../Components/table';

function Home() {
  return (
    <div>
      <h1>StarWars Planets</h1>
      <FilterByName />
      <Table />
    </div>
  );
}
export default Home;
