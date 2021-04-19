import React from 'react';
import Site from './site/page/index';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route component={Site} path="/" exact />
    </div>
  );
}

export default App;
