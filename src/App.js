import React from "react";
import { BorderPreview } from "./features/borderPreview/BorderPreview";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className='App-header'>
				<h2>Border Preview</h2>
        <BorderPreview />
      </header>
    </div>
  );
}

export default App;
