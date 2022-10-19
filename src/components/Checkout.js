import React from 'react';
import CartItem from './CartItem';
import Menu from './Menu';
import Pricing from './Pricing';

const Checkout = (props) => {

    const {items} = props;

    return (
        <div>
            <Menu />
            Checkout
            <div>
                <div class='cartContainer'>
                    {items.map(item => {
                        return(<CartItem />)
                    })}
                </div>
                <Pricing />
            </div>

        </div>
    )

};

export default Checkout;