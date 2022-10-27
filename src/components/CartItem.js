import React from 'react';

const CartItem = ({item, count, totalPrice, removeItem }) => {
    
    return (
        <div className='cartItem'>
            <img className='checkoutImg' src={item.img} alt={item.img}/>
            <div>
                
                <div>
                    <div>{item.title}</div>
                    <div>{item.label}</div>
                    <div>[x{count}]</div>
                </div>
                <div>
                    <div>${totalPrice}</div>
                </div>
            </div>
            <button onClick={() => removeItem(item.title)}>x</button>
            
        </div>
    )
};

export default CartItem;