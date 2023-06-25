import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonDetail from "../person-detail";

const App = () => {
    return(
        <div className="container">
            <Header />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-6">
                        <RandomPlanet />
                    </div>
                    <div className="col-6">
                        <PersonDetail />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;