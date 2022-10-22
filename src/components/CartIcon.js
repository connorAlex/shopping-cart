import React from "react";
import { useNavigate} from 'react-router-dom';

const CartIcon = (props) => {
    const { cartCount } = props;
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/checkout');
    }

    return (
        <div onClick={() => routeChange()} className="CartIcon">
            CART [{cartCount}]
        </div>
    );
}

export default CartIcon;