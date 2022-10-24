import React from 'react';

const CartItem = (props) => {

    const {item} = props;

    return (
        <div className='CartItem'>
            <img className='checkoutImg'src={item.img} alt={item.img}/>
            <div>
                <div>{item.label}</div>
                <div>${item.price}</div>
            </div>
            
        </div>
    )
};

export default CartItem;