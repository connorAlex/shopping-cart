import './App.css';
import React from 'react';
import Menu from './components/Menu';
import CartIcon from './components/CartIcon';
import model from './images/model.jpg'


function App() {

  return (
    <div className="App">
      <div className='header'>
        <Menu />
        <CartIcon />
      </div>
      <div className='imgGrandParent'>
        <div className='imgParent'>
          <img className='model' src={model} />
        </div>
      </div>
    </div>
  );
}

export default App;
