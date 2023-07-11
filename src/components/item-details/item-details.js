import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import './item-details.css';
import ErrorButton from '../error-button';

export default class ItemDetail extends Component {
    SwapiService = new SwapiService();
    state = {
        itemDetail: null,
        loadign: true,
        itemImage: null,
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
        const {selectedItem, getData, getImageURL} = this.props;
        if(!selectedItem) {
            return <Spinner/>
        }
        else {
            getData(selectedItem)
            .then((item) => {
                this.setState({
                    itemDetail: item,
                    itemImage: getImageURL(item)
                });
            });
        }
    }

    renderItemDetail() {
        const item = this.state.itemDetail;
        const {name, id, gender, eyeColor, birthYear} = this.state.itemDetail;
        return (<div className="card-body d-flex align-items-center">
                        <div className="img">
                            <img src={this.state.itemImage} alt='img'/>
                        </div>                
                        <div className="list-group">
                            {React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })}
                        </div>
                    </div>);
    }
    render() {
        const title = this.props.title;
        const showItemDetail = () => {
            if(!this.state.itemDetail && !this.state.itemImage) {
                return <Spinner /> 
            }
            else {
                return this.renderItemDetail();
            }
        }
        
        

        return(
            <div className="person-detail">
                <div className="card text-white bg-secondary mb-3">
                    <div className="card-header">{title} Detail</div>
                    {showItemDetail()}
                    <ErrorButton />
                </div>
            </div>
        );
    }
    
}