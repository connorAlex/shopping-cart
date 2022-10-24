import React, {useState} from 'react';
import CartItem from './CartItem';
import Menu from './Menu';
import Pricing from './Pricing';
import uniqid from 'uniqid';

const Checkout = (props) => {
    
    //this should be created from props
    const {items} = props;

    return (
        <div>
            <Menu />
            <div>
                <div className='cartContainer'>
                    {items.map((item) => 
                        <CartItem 
                            item={item}
                            key={uniqid()}
                        />
                    )}
                </div>
                <Pricing />
            </div>

        </div>
    );
};

export default Checkout;