import React from 'react';

import CustomBotton from '../custom-button/custom-button.component';

import './cart-dropdown.component.jsx';
import CustomButton from '../custom-button/custom-button.component';

const CardDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

export default CardDropdown;