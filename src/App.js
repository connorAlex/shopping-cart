import './App.css';
import React from 'react';
import Menu from './components/Menu';
import CartIcon from './components/CartIcon';

function App() {

  return (
    <div className="App">
      Home
      <div>
        <Menu />
        <CartIcon />
      </div>
      
    </div>
  );
}

export default App;
