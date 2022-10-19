import React, { useState } from 'react';
import Merch from './Merch.js';
import { merchandiseData } from '../merchandiseData';
import Menu from './Menu';

const Shop = (props) => {
    // this is a use case for context. your cart follows you regardless of page
    const [ storeItems, setStoreItems ] = useState(merchandiseData);
    
    return (
        <div className='Shop'>
            <Menu />
            <div>
                <div> Model Photo</div>
                <div>
                    {storeItems.map((item) => <Merch />)}
                </div>
            </div>
        </div>
    )
};

export default Shop;