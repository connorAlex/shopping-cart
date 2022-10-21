import React from "react";
import { useNavigate} from 'react-router-dom';

const Menu = () => {

    let navigate = useNavigate();
    const routeChange = (path) => {
        
        navigate(path);
    }

    return (
        <div className="Menu">
            <div onClick={() => routeChange('/')}> FUITE À VARENNES </div>
            <div onClick={() => routeChange('/shop')}> SHOP </div>
            <div> ABOUT </div>
            <div> SEARCH </div>
        </div>
    );
}
export default Menu;