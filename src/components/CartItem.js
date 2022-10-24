import React from 'react';

const CartItem = (props) => {

    const {item} = props;

    return (
        <div className='CartItem'>
            <div>{item.img}</div>
            <div>
                <div>{item.label}</div>
                <div>{item.price}</div>
            </div>
            
        </div>
    )
};

export default CartItem;