import React, {useState} from 'react';
import CartItem from './CartItem';
import Menu from './Menu';
import Pricing from './Pricing';

const Checkout = () => {
    
    //this should be created from props
    const [items, setItems] = useState([0,2,3]);

    return (
        <div>
            <Menu />
            <div>
                <div className='cartContainer'>
                    {items.map((item) => 
                        <CartItem />
                    )}
                </div>
                <Pricing />
            </div>

        </div>
    );
};

export default Checkout;