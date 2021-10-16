const PriceFilter = () => {
    return (  
        <div className="priceSlider">
            <h1 id ="slider"> Price Slide Bar </h1>

            <input id="typeinp" type="range" min="0" max="4" defaultValue="2" step="1" oninput="sliderChange(this.value)"/>
            <output id="output"></output>
        </div>
    )
}

export default PriceFilter;