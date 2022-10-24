import React from "react";

const Merch = (props) => {

    const {item, addToCart} = props;

    return (
        <div className="Merch">
            <img className='merchImg' src={item.img} alt={item.label}/>
            <div>
                <div>
                    <div> {item.title}</div>
                    <div> {item.label} </div>
                    <div> ${item.price} </div>
                </div>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Merch;