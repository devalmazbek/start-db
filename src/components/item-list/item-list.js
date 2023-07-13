import React, {Component} from 'react';
import Spinner from '../spinner';
import SwapiService from '../../service/swapi-service';

import './item-list.css';

const ItemList = (props) => {
    
    const showItemList = () => {
        if(!props.data) {
            return <Spinner/>
        }
        else if(props.data) {
            return renderItemList(props.data);
        }
    }

    const renderItemList = (itemList) => {
        return(itemList.map((item) => {
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
            })
        );   
    }
    

    return(
        <div className="list-group item-list">
            {showItemList()}
        </div>
    );
} 

const widthData = (View) => {
    return class extends Component {
        state = {
            data: null
        }
    
        componentDidMount() {
            const { getData } = this.props;
            getData()
            .then((data) => {
                this.onPeopleLoaded(data)
            })
            .catch((error) => console.log(error));
        }

        onPeopleLoaded = (data) => {
            this.setState({
                data: data,
            });
            console.log(this.state.data);
        }

        render() {
            const {data} = this.state;
            
            if(!data) {
                return <Spinner/>  
            }
            return <View {...this.props} data={data}/>
            
        }
    }
}

export default widthData(ItemList);