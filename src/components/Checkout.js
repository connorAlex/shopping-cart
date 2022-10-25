import React, {useState} from 'react';
import CartItem from './CartItem';
import Menu from './Menu';
import Pricing from './Pricing';
import uniqid from 'uniqid';

const Checkout = (props) => {
    
    const {items} = props;

    const getCount = (title) => {
        let count = 0;

        items.forEach((item) => {
            if (item.title === title) count += 1;
        });

        return count;
    }

    const unique = (array, propertyName) => {
        return array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
    }
    

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
    const distinctItems = unique(items, 'title');

    return (
        <div className='checkout'>
            <div className='header'>
                <Menu />
            </div>
            <div className='checkoutContent'>
                <div>
                    <div className='cartTitle'>Your Cart</div>
                        <div className='cartContainer'>
                    
                            {distinctItems.map((item) =>
                                <CartItem
                                    count={getCount(item.title)}
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