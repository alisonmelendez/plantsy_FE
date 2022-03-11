import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



function PlantPage() {

    const params = useParams()
    const [plantPage, setPlantPage] = useState([])
    const [facts, setFacts] = useState([])
    console.log(params.name)

    const URLpage = `http://localhost:9292/plantpages/${params.name}`
    // const URLfact = `http://localhost:9292/facts/`
   
    console.log(URLpage)
    useEffect(() => {
       fetch(URLpage)
         .then((resp) => resp.json())
         .then((data) => {
           setPlantPage(data)
         });
   }, []);

//    useEffect(() => {
//     fetch(URLfact)
//       .then((resp) => resp.json())
//       .then((data) => {
//         setFacts(data)
//       });
//     }, []);
        
    if(plantPage.length == 0) {return null}

    return(
        <div style={{  background: "white",
        width: "200vh",
        height: "100vh"
        }}>

        {/* for styling  */}
        {/* <div class="rectangle"></div>     */}

        <button id="HomeButton"><Link id="link"to="/">Home</Link></button>

        <div id="iconTitleHeader">
        <img id="plantPageIcon" src={require(`../public_images/${plantPage.src}`)}></img>
        <h1 id="plantPageHeader">{plantPage.name}</h1>
        </div>

        <h2>{plantPage.botanical_name}</h2>
        <img id="plantPageImage" src={require(`../public_images/${plantPage.src}`)}></img>
        <p>{plantPage.description}</p>
       

        <div class="flex-container">

            <div class="flex-child magenta">
                <ul>
                    <li>Sun: {plantPage.sun_amount}</li>
                    <li>Soil: {plantPage.soil}</li>
                    <li>Difficulty: {plantPage.difficulty}</li>
                    <li>Water: {plantPage.water_amount}</li>
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