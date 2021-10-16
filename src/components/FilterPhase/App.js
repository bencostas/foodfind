import React from "react";
import DistanceFilter from "./components/distanceFilter";
import FoodFilter from "./components/foodFilter";
import PriceFilter from "./components/priceFilter";
import './FilterPhasePage.css';

const FilterPhase = () => {
    return (
        <div className = 'filterPhase'>
            <section id = 'selectionScreen'>
                <FoodFilter />
                <PriceFilter />
                <DistanceFilter />
            </section>
            <section>
            <button type="button">Continue</button>

            </section>
        </div>
    )
}

export default FilterPhase;