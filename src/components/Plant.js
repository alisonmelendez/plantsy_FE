import React from "react";

function Plant({ plant }) {

    return(
        <div>
            <img src={plant.src}/>
        </div>
    );
}

export default Plant

