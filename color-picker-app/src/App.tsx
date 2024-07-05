import React from 'react';
import './App.css';
import ContaGotas from './ContaGotas';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicativo de Seletor de Cores</h1>
        <ContaGotas />
      </header>
    </div>
  );
};

export default App;
