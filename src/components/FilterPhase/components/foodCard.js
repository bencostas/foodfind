import React from 'react';


const FoodCard = ({cuisine}) => {
    return(
        <div className = 'FoodCard'>
            <label className = 'cuisineTitle'> {cuisine} </label>
        </div>
    )
}

export default FoodCard;