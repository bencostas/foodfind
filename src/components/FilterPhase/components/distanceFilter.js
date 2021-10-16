import React from 'react';

const DistanceFilter = () => {
    return (  
        <div className="distanceSlider">
            <h1 id ="slider"> Distance Slide Bar </h1>
            <input id="typeinp" type="range" min="0" max="5" defaultValue="3" step="1"/>
            
        </div>
    )
}

export default DistanceFilter;