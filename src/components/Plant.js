import React from "react";
import { Link } from "react-router-dom";

function Plant({ plant }) {
    return(
        <div className={`plant-${plant.id}`}>
            <Link to={`/plants/${plant.name}`}><img id={plant.name}

            src={require(`../public_images/${plant.src}`)} 
            /></Link>
        </div>
    );
}

export default Plant