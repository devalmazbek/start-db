import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetail from "../person-detail/person-detail";
import ErrorIndecator from "../error";
import Row from "../row";
import ErrorBoundary from "../error-boundary/error-boundary";

export default class PersonPage extends Component {
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

        const personDetail = (<PersonDetail selectedItem={this.state.selectedItem}/>)

        return(
            <ErrorBoundary>
                <Row leftComponent={itemList} rightComponent={personDetail} />
            </ErrorBoundary>
                            
        );
    }
}


