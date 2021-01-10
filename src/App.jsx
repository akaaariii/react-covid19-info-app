import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';

const App = () => {

  const [data, setData] = useState({
    cases: 0, 
    todayCases: 0, 
    deaths: 0, 
    todayDeaths: 0, 
    recovered: 0, 
    active: 0, 
    tests: 0, 
    affectedCountries: 0
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await response.json();
    setData(data);
  }

  return (
    <div className="App">
      <Header />
      <Info data={data} />
      <Footer />
    </div>
  );
}

export default App;
