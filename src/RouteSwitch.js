import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Checkout from './components/Checkout';
import Shop from './components/Shop';
import {useState, useEffect} from 'react';

import shades from './images/shades_closeup.jpeg'
import coat from './images/trench_closeup.jpeg'

const RouteSwitch = () => {

    const [cart, setCart] = useState([]);
    
    const addToCart = (item) => {
        setCart(cart.concat(item))
    }

    const removeCartItem = (title) => {
        let index = findDeleteIndex(title);
        if (index === -1) return false;

        setCart(cart => {
            return cart.filter((value,i) => i !== index);
        })
    }

    const findDeleteIndex = (title) => {
        for (let i = 0; i <cart.length; i++) {
            if (cart[i].title === title) {
                return i;
            }
        }
        return 
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App cartCount={cart.length}/>} />
                <Route path='/checkout' element={<Checkout removeItem={removeCartItem} items={cart}/>} />
                <Route path='/shop' element={<Shop addToCart={addToCart} cartCount={cart.length}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;