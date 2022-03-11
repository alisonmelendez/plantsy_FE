import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import PlantPage from "./PlantPage"
import Plant from "./Plant"



function App() {

 const [plants, setPlants] = useState([])

 const URL = "http://localhost:9292/plants"

 useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setPlants(data)
      });
}, []);

const plantImg = plants.map((plant) => {
  return <Plant key={plant.id} plant={plant}/>;
})

  return (
    <div className="App">
      <header className="App-header">
        <h1>Plantsy 🌱</h1>
        <p> Add a section here to describe what to do (find the plants yourself by hovering around)</p>
        <span class="dot"></span>
      </header>
      <div>
      {plants.length === 0 ? <p>no results</p> :plantImg}

      </div>

    </div>
  );
}

export default App;




