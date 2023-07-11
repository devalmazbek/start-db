import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetail from "../item-details/item-details";
import ErrorIndecator from "../error";
import Row from "../row";
import ErrorBoundary from "../error-boundary/error-boundary";
import SwapiService from "../../service/swapi-service";

export default class PersonPage extends Component {
    SwapiService = new SwapiService();
    state = {
        selectedItem: 1,
    }

    

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndecator />
        }

        const itemList = <ItemList onItemSelected={this.onItemSelected}
                                    getData={this.props.getData}>
                                    {(item)=> `${item.name} ${item.gender} ${item.birthYear}`}
                        </ItemList>;

        const personDetail = (<ItemDetail selectedItem={this.state.selectedItem}/>)

        return(
            <ErrorBoundary>
                <Row leftComponent={itemList}  />
            </ErrorBoundary>
                            
        );
    }
}


