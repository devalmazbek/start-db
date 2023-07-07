import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import './person-detail.css';
import ErrorButton from '../error-button';

export default class PersonDetail extends Component {
    SwapiService = new SwapiService();
    state = {
        itemDetail: null,
        loadign: true,
    }

    componentDidMount() {
        this.upDateItemDetail();
    }

    componentDidUpdate(prevProps) {
        if(this.props.selectedItem !== prevProps.selectedItem) {
            this.upDateItemDetail();
        }
     }

    

    upDateItemDetail() {
        const {selectedItem} = this.props;
        if(!selectedItem) {
            return <Spinner/>
        }
        else {
            this.SwapiService.getPerson(selectedItem)
            .then((item) => {
                this.setState({
                    itemDetail: item
                });
            });
        }
    }

    renderItemDetail() {
        const {name, id, gender, eyeColor, birthYear} = this.state.itemDetail;
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
        const showItemDetail = () => {
            if(!this.state.itemDetail) {
                return <Spinner />
            }
            else {
                return this.renderItemDetail();
            }
        }
        
        

        return(
            <div className="person-detail">
                <div className="card text-white bg-secondary mb-3">
                    <div className="card-header">Person Details</div>
                    {showItemDetail()}
                    <ErrorButton />
                </div>
            </div>
        );
    }
    
}