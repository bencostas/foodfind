import React from 'react';
import FoodCard from './foodCard';

const FoodFilter = () => {
    const cuisineData = ["Chinese", "Indian", "Japanese"];
    return(
        <div className = 'foodFilter'>
            <label> Instruction </label>
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