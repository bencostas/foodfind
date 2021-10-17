import React from 'react';

const DistanceFilter = () => {
    return (  
        <div className="distanceSlider">
            <h1 id ="slider"> Distance Slide Bar </h1>
            <input id="typeinp" type="range" min="1" max="5" defaultValue="3" step="1" oninput="sliderChange(this.value)"/>
            <output id="output"></output>
        </div>
    )
}

export default DistanceFilter;