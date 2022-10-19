import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Checkout from './components/Checkout';
import Shop from './components/Shop';

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/shop' element={<Shop />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;