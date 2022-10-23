import React, { useState } from 'react';
import Merch from './Merch.js';
import { merchandiseData } from '../merchandiseData';
import Menu from './Menu';
import CartIcon from './CartIcon';
import sidePhoto from '../images/verticalovercoat.jpg';


const Shop = (props) => {
    // this is a use case for context. your cart follows you regardless of page
    const [ storeItems, setStoreItems ] = useState(merchandiseData);
    const { cartCount } = props;
    return (
        <div className='Shop'>
           <div className='header'>
                <Menu />
                <CartIcon cartCount={cartCount}/>
            </div>
            <div>
                <img src={sidePhoto} className='sideImg' />
                <div className='merchContainer'>
                    {storeItems.map((item) => <Merch img={item.img} title={item.title} label={item.label} price={item.price}/>)}
                </div>
            </div>
        </div>
    )
};

export default Shop;