import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>COVID-19 Info</main>
      <Footer />
    </div>
  );
}

export default App;
