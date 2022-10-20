import React from "react";

const CartIcon = (props) => {
    const { cartCount } = props;
    
    return (
        <div className="CartIcon">
            CART [{cartCount}]
        </div>
    );
}

export default CartIcon;