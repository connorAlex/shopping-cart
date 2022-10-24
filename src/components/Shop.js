import React, { useState } from 'react';
import Merch from './Merch.js';
import { merchandiseData } from '../merchandiseData';
import Menu from './Menu';
import CartIcon from './CartIcon';
import sidePhoto from '../images/verticalovercoat.jpg';
import uniqid from 'uniqid';

const Shop = (props) => {
    // this is a use case for context. your cart follows you regardless of page
    const [ storeItems, setStoreItems ] = useState(merchandiseData);
    const { cartCount, addToCart } = props;
    return (
        <div className='Shop'>
           <div className='header'>
                <Menu />
                <CartIcon cartCount={cartCount}/>
            </div>
            <div>
                <img src={sidePhoto} className='sideImg' alt='Model wearing clothing that is for sale'/>
                <div className='merchContainer'>
                    {storeItems.map((item) => <Merch 
                        item={item}
                        key={uniqid()}
                        addToCart={addToCart}
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

export default Shop;