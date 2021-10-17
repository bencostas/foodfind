import React from 'react';
import { useState } from 'react';
import './BanPhase.css';

const RestaurantCard = ({restaurant}) => {

    const [color, setColor] = useState('#F4F4F4');

    return(
        <div style={{ backgroundColor: color }}
         className = 'RestaurantCard'>
            <label className = 'RestaurantTitle'> {restaurant.name} </label>
            <p className = "info"> {restaurant.cuisine} | {restaurant.openNow.open_now ? "Open Now" : "Closed Now"} </p>
            <p className = 'info'> {restaurant.rating}/5.0  ({restaurant.total_rating}) {restaurant.price ? "| " + "$".repeat(restaurant.price) : ''}</p>
            <p className = 'info'> {restaurant.address} </p>
            <button onClick={() => {
                restaurant.ban = !restaurant.ban;
                if(color === '#F4F4F4')
                    setColor('#B9B9B9');
                else
                    setColor('#F4F4F4');
            }} className = 'ban'> Ban </button>
            <button onClick={() => {
                var copyText = restaurant.name + ', ' + restaurant.address;
                navigator.clipboard.writeText(copyText);
            }}
            className = 'copy'> Copy </button>
        </div>
    )
}

export default RestaurantCard;