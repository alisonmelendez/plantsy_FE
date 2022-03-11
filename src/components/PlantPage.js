import React from "react";
import { Link } from "react-router-dom";
import Plant from "./Plant";


function PlantPage() {
    return(
        <div style={{  background: "white",
        width: "100%",
        height: "100%"
        }}>

        {/* for styling  */}
        {/* <div class="rectangle"></div>     */}

        <button id="HomeButton"><Link id="link"to="/">Home</Link></button>

        <div id="iconTitleHeader">
        <img id="plantPageIcon" src="https://cdn.rona.ca/images/54615319_L.jpg"></img>
        <h1 id="plantPageHeader">plant.name</h1>
        </div>

        <h2>plant.botanical_name</h2>
        <img id="plantPageImage" src="https://cdn.rona.ca/images/54615319_L.jpg"></img>
        <p>plant.description</p>
       

        <div class="flex-container">

            <div class="flex-child magenta">
                <ul>
                    <li>Sun: plant.sun_amount</li>
                    <li>Soil: plant.soil</li>
                    <li>Difficulty: plant.difficulty</li>
                    <li>Water: plant.water_amount</li>
                </ul>
            </div>
            
            <div class="flex-child green">
                <ul>
                    <li>fact.fact</li>
                    <li>fact.fact</li>
                    <li>fact.fact</li>
                </ul>
            </div>
        
        </div>
       
            
        </div>
    );
}

export default PlantPage