import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Checkout from './components/Checkout';
import Shop from './components/Shop';
import {useState} from 'react';

const RouteSwitch = () => {

    const [cart, setCart] = useState([]);
    
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