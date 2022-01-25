import React from 'react';
import './App.css';
import Home from './Pages/Home';
import StarwarsProvider from './Provider/StarwarsProvider';

function App() {
  return (
    <StarwarsProvider>
      <Home />
    </StarwarsProvider>
  );
}

export default App;
