import React from "react";

const Merch = (props) => {

    const {img, title, label, price, addToCart} = props;

    return (
        <div className="Merch">
            <img className='merchImg' src={img} alt={label}/>
            <div>
                <div>
                    <div> {title}</div>
                    <div> {label} </div>
                    <div> ${price} </div>
                </div>
                <button onClick={() => addToCart(title)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Merch;