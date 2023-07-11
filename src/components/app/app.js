import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../person-page/person-page";
import Row from "../row";
import SwapiService from "../../service/swapi-service";
import ItemDetail from "../item-details";
import Record from "../record";
import ErrorBoundary from "../error-boundary/error-boundary";

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

        const {getPerson, getStarship, getPlanet, getPersonImage, getStartshipImage, getPlanetImage} = this.SwapiService;

        const personDetails = <ItemDetail selectedItem={5}
                                          getData={getPerson}
                                          getImageURL={getPersonImage}
                                          title={'Person'}>
                                    <Record field={'gender'} label={'Gender'}/>
                                    <Record field={'eyeColor'} label={'Eye Color'}/>
                                    <Record field={'birthYear'} label={'Birth Year'}/>
                                </ItemDetail>;
        const starshipDetails = <ItemDetail selectedItem={10}
                                            getData={getPlanet}
                                            getImageURL={getPlanetImage}
                                            title={'Planet'}>
                                    <Record field={'population'} label={'Population'}/>
                                    <Record field={'rotationPeriod'} label={'Rotation Period'}/>
                                    <Record field={'diameter'} label={'Diameter'}/>
                                </ItemDetail>;

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
                    <div className="row">
                        <ErrorBoundary>
                            <Row leftComponent={personDetails}
                            rightComponent={starshipDetails} />
                        </ErrorBoundary>   
                    </div>
                </div>
               
            </div>
        );
    }
    
}