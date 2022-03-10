import React from "react";
import { Link } from "react-router-dom";

function Plant({ plant }) {
    return(
        <div>
            <Link to={`/plants/${plant.name}`}><img id="flower"

            src={require(`../public_images/${plant.src}`)} 
            /></Link>
        </div>
    );
}

export default Plant