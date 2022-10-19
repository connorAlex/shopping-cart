import React from "react";

const CartIcon = (props) => {
    const { cartCount } = props;

    return (
        <div className="CartIcon">
            <div> CART </div>
            <div>{cartCount}</div>
        </div>
    );
}

export default CartIcon;