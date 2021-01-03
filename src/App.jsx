import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Info from './components/Info';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
