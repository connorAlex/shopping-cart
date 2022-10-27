import React from "react";

const Pricing = (props) => {

    const {subtotal, tax, total} = props;

    const calcShipping = () => {
        if (subtotal > 0 ) return 13.55;
        return 0;
    }

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
                    <div> 
                        ${(calcShipping())}
                    
                    </div>
                </div>
                <div>
                    <div> Taxes </div>
                    <div> ${tax} </div>
                </div>
                <div>
                    <div> Total </div>
                    <div> ${total + calcShipping()} </div>
                </div>
            </div>
            <div>
                <button>Checkout</button>
            </div>

        </div>
    );

};
export default Pricing;