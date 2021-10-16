import React from 'react';
import FoodCard from './foodCard';
import cuisineData from '../data/cuisineData';

const FoodFilter = () => {

    return(
        <div className = 'foodFilter'>
            <label> Instruction </label>
            <div>
                {cuisineData.map((cuisine) => {
                    return (
                        <FoodCard cuisine = {cuisine.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default FoodFilter;