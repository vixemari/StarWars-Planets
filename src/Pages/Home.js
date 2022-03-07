import React from 'react';
import FilterByName from '../Components/FilterByName';
import Table from '../Components/table';
import FilterByNumericValues from '../Components/FilterByNumericValues';

function Home() {
  return (
    <div>
      <header className="logo-header">
        <img className="logo" src="https://i.imgur.com/Z70vbgv.png" alt="logo" />
      </header>
      <FilterByName />
      <FilterByNumericValues />
      <Table />
    </div>
  );
}
export default Home;
