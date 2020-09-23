import React from 'react';
import './App.css';
import AddNames from "./AddNames.js";
import BabyNames from "./BabyNames.json";

function App() {
  return (
    <div className="App">
    <AddNames BabyNames={BabyNames} />
    </div>
  );
}

export default App;
