import React from "react";
import AirportChooser from './Components/AirportChooser'
import "./App.css"
import "./dropdown.css"
import AirportListContextProvider  from './Context/AirportListContext' 


const App = () => (
  <AirportListContextProvider>
  <div className="container">
  <div className="app-wrapper">
  <div className="header">
            <h1>Airport List</h1>            
        </div> 
  <div className="main">
      <AirportChooser />
  </div>
    </div>
   </div>
   </AirportListContextProvider>
);

export default App;
