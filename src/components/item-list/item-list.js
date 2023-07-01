import React, {Component} from 'react';
import Spinner from '../spinner';
import SwapiService from '../../service/swapi-service';

import './item-list.css';

export default class ItemList extends Component {
    SwapiService = new SwapiService();
    constructor(props) {
        super(props);
        this.state = {
            peopleList: null,
        }
    }

    componentDidMount() {
        this.SwapiService.getAllPeople()
        .then((allPeople) => {
            this.onPeopleLoaded(allPeople)
        })
        .catch((error) => console.log(error));
    }

    onPeopleLoaded = (people) => {
        this.setState({
            peopleList: people,
        });
    }

    renderPoeple(people) {
        return people.map(({name, id}) => {
            return(
                <li key={id}
                    onClick={() => this.props.onPersonSelected(id)}
                    className='list-group-item list-group-item-action'>
                    {name}
                </li>
            );
        });
    }   

    render() {
        const {peopleList} = this.state;
        const showPeolpList = () => {
            if(!peopleList) {
                return <Spinner/>  
              }
            else{
                  const personItem = this.renderPoeple(peopleList); 
                  return personItem;
            }
        }

        return(
            <div className="list-group item-list">
                {showPeolpList()}
            </div>
        );
    }
    
}