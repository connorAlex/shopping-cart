import React, {useState} from 'react';
import CartItem from './CartItem';
import Menu from './Menu';
import Pricing from './Pricing';
import uniqid from 'uniqid';

const Checkout = (props) => {
    
    const {items} = props;

    const calculateSubTotal = (arr) => {
        let subtotal = 0;
        arr.forEach((item) => {
            subtotal += parseInt(item.price.replace(/,/g,''));
        });
        return subtotal;
    }

    const calculateTax = (subtotal) => {
        const taxRate = 0.0625;
        return subtotal * taxRate;
    };

    const subtotal = calculateSubTotal(items);
    const tax = calculateTax(subtotal);

    return (
        <div className='checkout'>
            <div className='header'>
                <Menu />
            </div>
            <div className='checkoutContent'>
                <div>
                    <div className='cartTitle'>Your Cart</div>
                        <div className='cartContainer'>
                    
                            {items.map((item) =>
                                <CartItem
                                    item={item}
                                    key={uniqid()}
                                />
                            )}
                        </div>
                </div>
                <Pricing 
                subtotal={subtotal}
                tax={tax}
                total={subtotal+tax}
                />
            </div>

        </div>
    );
};

export default Checkout;