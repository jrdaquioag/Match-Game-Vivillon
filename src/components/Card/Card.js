import React from "react";
import "./Card.css";

const Card = props => (
    <div className = "card" onClick = {
        () => {}  
        }>
        <div className = "card-img">
            <img src = {props.image} alt = {props.name}/>
        </div>
    </div>
);

export default Card;