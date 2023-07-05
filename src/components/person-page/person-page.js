import React, {Component} from "react";
import ItemList from "../item-list";
import PersonDetail from "../person-detail/person-detail";
import ErrorIndecator from "../error";
import Row from "../row";

export default class PersonPage extends Component {
    state = {
        selectedPerson: 1,
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger;
        this.setState({
            hasError: true,
        });
        console.log(error, info);   
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndecator />
        }

        const itemList = <ItemList onPersonSelected={this.onPersonSelected}
                                   getData={this.props.getData}/>;

        const personDetail = <PersonDetail selectedPerson={this.state.selectedPerson}/>

        return(
            <>
                <Row leftComponent={itemList} rightComponent={personDetail} />
            </>
            
        );
    }
}


