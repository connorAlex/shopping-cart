import React from "react";

const Merch = (props) => {

    const {img, title, label, price} = props;

    return (
        <div className="Merch">
            <div> img </div>
            <div>
                <div> {title}</div>
                <div>
                    <div> {label} </div>
                    <div> {price} </div>
                </div>
            </div>
        </div>
    );
};

export default Merch;