import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";
import Application from './Application';
function App() {
  return (
    <div>
      <h1>Tabs</h1>
      <Tabs>
        <div label="planet-list">          
          <Application></Application>
        </div>
        <div label="Faviorate-list">         
        </div>   
      </Tabs>
    </div>
  );
}

export default App;