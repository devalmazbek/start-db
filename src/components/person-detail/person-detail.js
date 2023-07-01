import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import './person-detail.css';

export default class PersonDetail extends Component {
    SwapiService = new SwapiService();
    state = {
        personDetail: null,
        loadign: true,
    }

    componentDidMount() {
        this.upDatePersonDetail();
    }

    componentDidUpdate(prevProps) {
        if(this.props.selectedPerson !== prevProps.selectedPerson) {
            this.upDatePersonDetail();
        }
     }

    upDatePersonDetail() {
        const {selectedPerson} = this.props;
        if(!selectedPerson) {
            return <Spinner/>
        }
        else {
            this.SwapiService.getPerson(selectedPerson)
            .then((person) => {
                this.setState({
                    personDetail: person
                });
            });
        }
    }

    renderPersonDetail() {
        const {name, id, gender, eyeColor, birthYear} = this.state.personDetail;
        return (<div className="card-body d-flex align-items-center">
                        <div className="img">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='random planet img'/>
                        </div>                
                        <div className="list-group">
                            <li className="list-group-item list-group-item-action">{name}</li>
                            <li className="list-group-item list-group-item-action">{gender}</li>
                            <li className="list-group-item list-group-item-action">{eyeColor}</li>
                            <li className="list-group-item list-group-item-action">{birthYear}</li>
                        </div>
                    </div>);
    }
    render() {
        const showPersonDetail = () => {
            if(!this.state.personDetail) {
                return <Spinner />
            }
            else {
                return this.renderPersonDetail();
            }
        }
        
        

        return(
            <div className="person-detail">
                <div className="card text-white bg-secondary mb-3">
                    <div className="card-header">Person Details</div>
                    {showPersonDetail()}
                </div>
            </div>
        );
    }
    
}