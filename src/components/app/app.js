import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetail from "../person-detail/person-detail";

export default class App extends Component {
    state = {
        selectedPerson: 1
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
                    <div className="row mt-3 mb-5">
                        <div className="col-sm-6">
                            <ItemList onPersonSelected={this.onPersonSelected}/> 
                        </div>
                        <div className="col-sm-6 mt-3">
                            <PersonDetail selectedPerson={this.state.selectedPerson}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}