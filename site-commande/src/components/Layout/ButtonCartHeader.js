import React from 'react';
import CartIcon from '../Cart/CartIcon';
import './ButtonCartHeader.css';

function ButtonCartHeader() {
    return (
        <button className="button">
            <span className="icon">
                <CartIcon />
            </span>
            <span>Ton Panier</span>
            <span className="badge">
                3
            </span>
        </button>
    )
}

export default ButtonCartHeader;
