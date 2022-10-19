import React from "react";

const Pricing = (props) => {

    return (
        <div className="Pricing">
            <div>
                <div>
                    <div> Subtotal </div>
                    <div> $XXXX </div>
                </div>
                <div> 
                    <div> Shipping </div>
                    <div> $XXX </div>
                </div>
                <div>
                    <div> Taxes </div>
                    <div> $XX </div>
                </div>
                <div>
                    <div> Total </div>
                    <div> $XXXXX </div>
                </div>
            </div>
            <div>
                <button>Checkout</button>
            </div>

        </div>
    );

};
export default Pricing;