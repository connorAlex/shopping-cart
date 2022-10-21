import React, { useState } from 'react';
import Merch from './Merch.js';
import { merchandiseData } from '../merchandiseData';
import Menu from './Menu';
import CartIcon from './CartIcon';
const Shop = (props) => {
    // this is a use case for context. your cart follows you regardless of page
    const [ storeItems, setStoreItems ] = useState(merchandiseData);
    
    return (
        <div className='Shop'>
           <div className='header'>
                <Menu />
                <CartIcon />
            </div>
            <div>
                <div> img </div>
                <div className='merchContainer'>
                    {storeItems.map((item) => <Merch />)}
                </div>
            </div>
        </div>
    )
};

export default Shop;