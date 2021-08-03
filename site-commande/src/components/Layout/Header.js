import React, {Fragment} from 'react';
import '../Layout/Header.css'
import ButtonCartHeader from './ButtonCartHeader';

import mealsImage from '../Assets/meals.jpg'
function Header() {
    return (
        <Fragment>
            <header className="header">
                <h1>Repas</h1>
                <ButtonCartHeader />
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="" />
            </div>
        </Fragment>
    )
}

export default Header;
