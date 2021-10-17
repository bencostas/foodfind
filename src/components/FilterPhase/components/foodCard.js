import React from 'react';
import { useState } from 'react';
import cuisineData from '../data/cuisineData';

const FoodCard = ({cuisine}) => {


    return(
        <div className = 'FoodCard'>
            <label className = 'cuisineTitle'> {cuisine} </label>
        </div>
    )
}

export default FoodCard;