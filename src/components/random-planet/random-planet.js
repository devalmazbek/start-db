import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import PlanetContent from './content-planet';
import ErrorIndecator from '../error';
import './random-planet.css';

export default class RandomPlanet extends Component {
    SwapiService= new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false,
    };

    swapiService = new SwapiService();
    constuctor() {
        console.log('test');
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.updatePlanet();
        setInterval(() => this.updatePlanet(), 3000);
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet: planet,
            loading: false
        });
    }

    onPlanetError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updatePlanet = () => {
        const id = Math.trunc(Math.random() * 18) + 2;
        this.SwapiService.getPlanet(id)
        .then((planet) => {
            this.onPlanetLoaded(planet)
        })
        .catch(this.onPlanetError);
    }


    // get planet by id
    

    render() {
        console.log('render()');
        const { planet, loading, error} = this.state;
        const errorMessage = error ? <ErrorIndecator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const planetContent = !(loading || error) ? <PlanetContent planet={planet}/> : null;
        
        return (
            <div className="random-planet jumbotron rounded d-flex justify-content-center align-items-center">
               {errorMessage}
               {spinner}
               {planetContent}
            </div>
        )
    }
};


