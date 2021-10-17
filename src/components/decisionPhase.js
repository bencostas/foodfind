import './decisionPhasePage.css';
import React from 'react';



const DecisionPhase = (finalList) => {
    let decision = finalList.location.state.finalList[0];
    return (
        <div className = 'decisionPhase'>

            <div class = "statement">
                The restaurant for the meal is:
            </div>
            <div class = "grid">
                <div class="restaurant"> {decision.name} </div>
                <div class="address"> {decision.address} </div>
            </div>

        </div>
    )
}

export default DecisionPhase;