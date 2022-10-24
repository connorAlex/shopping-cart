import React from "react";

const Pricing = (props) => {

    const {subtotal, tax, total} = props;

    return (
        <div className="Pricing">
            
            <div>
            <div>Amount Due</div>
                <div>
                    <div> Subtotal </div>
                    <div> ${subtotal}</div>
                </div>
                <div> 
                    <div> Shipping </div>
                    <div> $13.60 </div>
                </div>
                <div>
                    <div> Taxes </div>
                    <div> ${tax} </div>
                </div>
                <div>
                    <div> Total </div>
                    <div> ${total + 13.60} </div>
                </div>
            </div>
            <div>
                <button>Checkout</button>
            </div>

        </div>
    );

};
export default Pricing;