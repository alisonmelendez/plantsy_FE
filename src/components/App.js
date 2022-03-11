import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import PlantPage from "./PlantPage"
import Plant from "./Plant"
import Homepage from "./Homepage";



function App() {

  return (
    <Switch> 
        <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/Plants/:name">
              <PlantPage />
        </Route>
    </Switch>
    
  );
}

export default App; 
