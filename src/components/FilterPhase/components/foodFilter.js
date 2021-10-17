import React from 'react';
import FoodCard from './foodCard';
import cuisineData from '../data/cuisineData';

const FoodFilter = () => {
    return(
        <div className = 'foodFilter'>
            <h1 id="introduction"> Click on a cuisine to toggle its ban and 
            adjust the price and distance you are comfortable with through the sliders </h1>
            <div>
                {cuisineData.map((cuisine) => {
                    return (
                        <FoodCard cuisine = {cuisine} />
                    )
                })}
            </div>
        </div>
    )
}

export default FoodFilter;