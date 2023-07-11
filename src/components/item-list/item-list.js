import React, {Component} from 'react';
import Spinner from '../spinner';
import SwapiService from '../../service/swapi-service';

import './item-list.css';

export default class ItemList extends Component {
    
    SwapiService = new SwapiService();

    state = {
        itemList: null
    }

    componentDidMount() {
        // const { getData } = this.props;
        this.SwapiService.getAllPeople()
        .then((itemList) => {
            this.onPeopleLoaded(itemList)
        })
        .catch((error) => console.log(error));
    }

    onPeopleLoaded = (itemList) => {
        this.setState({
            itemList: itemList,
        });
    }

    renderItems(arr) {
        return arr.map((item) => {
            if(item.id <=7) {
                const {id} = item;
                const label = this.props.children(item);
                return(
                    <li key={id}
                        onClick={() => this.props.onItemSelected(id)}
                        className='list-group-item list-group-item-action'>
                        {label}
                    </li>
                );
            }
            
        });
    }   

    render() {
        const {itemList} = this.state;
        const showPeolpList = () => {
            if(!itemList) {
                return <Spinner/>  
              }
            else{
                const personItem = this.renderItems(itemList); 
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