import React from "react";
import DistanceFilter from "./components/distanceFilter";
import FoodFilter from "./components/foodFilter";
import PriceFilter from "./components/priceFilter";
import './FilterPhasePage.css';

const FilterPhase = () => {

    return (
        <div className = 'filterPhase'>
            <section className = 'selectionScreen'>
                <FoodFilter />
                <PriceFilter />
                <DistanceFilter />
            </section>
            <section className="buttonScreen">
            <button type="button" className="continueButton">Continue</button>

            </section>
        </div>
    )
}

export default FilterPhase;