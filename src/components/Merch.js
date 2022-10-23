import React from "react";

const Merch = (props) => {

    const {img, title, label, price} = props;

    return (
        <div className="Merch">
            <img className='merchImg' src={img} alt={label}/>
            <div>
                <div> {title}</div>
                <div>
                    <div> {label} </div>
                    <div> ${price} </div>
                </div>
            </div>
        </div>
    );
};

export default Merch;