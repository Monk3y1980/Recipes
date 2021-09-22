import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"


function App () {
    return (
            /* React.Fragment применяется для вставки не связанных элементов */
        <div className="App">
            <Navbar/>
            <Footer />
        </div>
        )

}

export default App;