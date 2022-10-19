import React from 'react';
import Merch from './Merch';

const Shop = (props) => {

    const { storeItems } = props;
    
    return (
        <div className='Shop'>
            <div> TITLE </div>
            <div>
                <div> Model Photo</div>
                <div>
                    {storeItems.map(item => {
                        return (<Merch/>);
                    })}
                </div>
            </div>
        </div>
    )
};

export default Shop;