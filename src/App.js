import './App.css';
import React from 'react';
import Menu from './components/Menu';
import CartIcon from './components/CartIcon';

function App() {

  return (
    <div className="App">
      <div className='header'>
        <Menu />
        <CartIcon />
      </div>
      <div className='imgGrandParent'>
        <div className='imgParent'>
          <div className='img'>img</div>
        </div>
      </div>
    </div>
  );
}

export default App;
