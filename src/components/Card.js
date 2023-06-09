import React from "react";

function Card({text , title , lorem ,color , textColor}) {
    return (
        <div className="card" id={color} >
                <p id={textColor}>{text}</p>
                <h1 id={textColor}>{title}</h1>
                <span id={textColor}> {lorem}</span>
        </div>
    )
}

export default Card;
