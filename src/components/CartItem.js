import React from 'react';

const CartItem = (props) => {

    const {item, count} = props;
    

    return (
        <div className='cartItem'>
            <img className='checkoutImg' src={item.img} alt={item.img}/>
            <div>
                <button>x</button>
                <div>
                    <div>{item.title}</div>
                    <div>{item.label}</div>
                    <div>x{count}</div>
                </div>
                <div>${item.price}</div>
            </div>
            
        </div>
    )
};

export default CartItem;