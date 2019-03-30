import React from "react";
import "./memoryCard.css";

const MemoryCard = props => (
    <div
    className= "cards"
    value= {props.id}
    onClick= {() => props.handleClick(props.id)}
    >
    <div className= "img-container">
        <img alt= {props.name} src= {props.image} />
        </div>
    </div>
);

export default MemoryCard