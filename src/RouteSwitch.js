import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Checkout from './components/Checkout';
import Shop from './components/Shop';
import {useState} from 'react';

import shades from './images/shades_closeup.jpeg'
import coat from './images/trench_closeup.jpeg'

const RouteSwitch = () => {

    const [cart, setCart] = useState([{
        img: shades,
        title: 'Sunglasses',
        label: 'Black Oval',
        price: '120',
    },
    {
        img: coat,
        title: 'Coat',
        label: 'Double Sided Wool',
        price: '1,200'
    },
    {
        img: shades,
        title: 'Sunglasses',
        label: 'Black Oval',
        price: '120',
    },
    {
        img: shades,
        title: 'Sunglasses',
        label: 'Black Oval',
        price: '120',
    },
    {
        img: shades,
        title: 'Sunglasses',
        label: 'Black Oval',
        price: '120',
    },]);
    
    const addToCart = (item) => {
        setCart(cart.concat(item))
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App cartCount={cart.length}/>} />
                <Route path='/checkout' element={<Checkout items={cart}/>} />
                <Route path='/shop' element={<Shop addToCart={addToCart} cartCount={cart.length}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;