import './decisionPhasePage.css';
import React from 'react';


document.body.style = 'background: #7AA1E9;';

const FilterPhase = () => {
    return (
        <div className = 'decisionPhase'>

            <div class = "statement">
                The restaurant for the meal is:
            </div>
            <div class = "grid">
                <div class="restaurant"> [restaurant name] </div>
                <div class="resPhoto">
                        <img class="photo" src="[photo of restaurant]" width="160" height="160"/>
                </div>
                <div class="address"> [Address] </div>
            </div>

        </div>
    )
}

export default FilterPhase;