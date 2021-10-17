import React from 'react';
import { useState } from 'react';

const FoodCard = ({cuisine}) => {

    const [color, setColor] = useState('#F4F4F4');

    return(
        <div style={{ backgroundColor: color }}
        onClick={() => {
            cuisine.status = !cuisine.status;
            if(color === '#F4F4F4')
                setColor('#B9B9B9');
            else
                setColor('#F4F4F4');
        }} className = 'FoodCard'>
            <label className = 'cuisineTitle'> {cuisine.name} </label>
        </div>
    )
}

export default FoodCard;