import React from 'react';
import FoodCard from './foodCard';
import cuisineData from '../data/cuisineData';

const FoodFilter = () => {
    return(
        <div className = 'foodFilter'>
            <h1 id="introduction"> Instructions </h1>
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