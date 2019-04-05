import React from "react";
import "./memoryCard.css";

const MemoryCard = props => (
    <div
    className= "cards"
    value= {props.id}
    onClick= {() => props.handleClick(props.id)}
    // onClick= {() => console.log('test')}

    >
    <div className= "img-container">
        <img src= {props.image} alt= {props.name} />
        </div>
    </div>
);

export default MemoryCard