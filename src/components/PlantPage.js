import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



function PlantPage() {

    const params = useParams()
    const [plantPage, setPlantPage] = useState([])
    const [facts, setFacts] = useState([])
    console.log(params.name)

    const URLpage = `http://localhost:9292/plantpages/${params.name}`
    const URLfact = `http://localhost:9292/facts/${params.name}`
   
    console.log(URLpage)
    useEffect(() => {
       fetch(URLpage)
         .then((resp) => resp.json())
         .then((data) => {
           setPlantPage(data)
         });
   }, []);

   useEffect(() => {
    fetch(URLfact)
      .then((resp) => resp.json())
      .then((data) => {
        setFacts(data)
        console.log(data)
      });
    }, []);
        
    if(plantPage.length == 0) {return null}
    if(facts.length == 0) {return null}
    console.log(facts)

    return(

        <div style={{  
        background: "white",
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

        <h2 id="bName">{plantPage.botanical_name}</h2>
        {/* <img id="plantPageImage" src={require(`../public_images/${plantPage.src}`)}></img> */}
        <div id="description">
        <p>{plantPage.description}</p>
        </div>

        <div class="flex-container">

            <div class="flex-child info">
                <h2 class="detailTitle"> Plant Care </h2>
                <ul>
                    <img class="icon" src="https://img.icons8.com/fluency/48/000000/sun.png"/><li class="CareListItem">Sun: {plantPage.sun_amount}</li>
                    <img class="icon" src="https://img.icons8.com/color/48/000000/soil.png"/> <li class="CareListItem">Soil: {plantPage.soil}</li>
                    <img class="icon" src="https://img.icons8.com/fluency/48/000000/star.png"/> <li class="CareListItem">Difficulty: {plantPage.difficulty}</li>
                    <img class="icon" src="https://img.icons8.com/ultraviolet/40/000000/water.png"/> <li class="CareListItem">Water: {plantPage.water_amount}</li>
                </ul>
            </div>
            
            <div class="flex-child facts">
            <h2 class="detailTitle"> Plant Facts </h2>
                <ul>
                    {facts.map((fact) =>{
                        return <li id="plantFact">{fact.fact}</li>
                    })}
                </ul>
            </div>
        
        </div>

       
       
            
        </div>
    );
}

export default PlantPage