import React from "react";

function Plant({ plant }) {

    console.log(plant)
    return(
        <div>
            <img id="flower" src={require(`../public_images/${plant.src}`)} />

            {/* src="src/public_images/Azalea.png" */}
           
        </div>
    );
}

export default Plant

