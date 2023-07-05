import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../person-page/person-page";
import ItemList from "../item-list";
import PersonDetail from "../person-detail/person-detail";

import SwapiService from "../../service/swapi-service";

export default class App extends Component {
    SwapiService = new SwapiService();

    state = {
        selectedPerson: 1,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }
   
    render() {
        return(
            <div className="container">
                <Header />
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm-12">
                            <RandomPlanet />
                        </div>
                    </div>
                    <PersonPage getData={this.SwapiService.getAllPeople}/>
                </div>
            </div>
            
        );
    }
    
}