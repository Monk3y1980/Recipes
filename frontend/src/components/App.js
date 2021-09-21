import React from "react";
import ReactDOM from "react-dom";
// import './App.css';
import Footer from './Footer';
// import {Route} from 'react-router-dom';
import Navbar from './Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Footer />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById("app"))
