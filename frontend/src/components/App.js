import React from 'react'
import {render} from 'react-dom'

function App() {
  return (
    <div className="App">
        <h1>Hallo</h1>
    </div>
  );
}

const container = document.getElementById("app");
render(<App />, container);