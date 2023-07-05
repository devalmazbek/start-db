import React, {Component} from 'react';
import Spinner from '../spinner';
import SwapiService from '../../service/swapi-service';

import './item-list.css';

export default class ItemList extends Component {
    
    SwapiService = new SwapiService();
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         peopleList: null,
    //     }
    // }

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props;
        getData()
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

    renderItems(item) {
        return item.map((item) => {
            if(item.id <=7) {
                const {id, name} = item;
                return(
                    <li key={id}
                        onClick={() => this.props.onPersonSelected(id)}
                        className='list-group-item list-group-item-action'>
                        {name}
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