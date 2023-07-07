import { Component } from "react";
import ErrorIndecator from "../error/error";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger;
        this.setState({
            hasError: true,
        });
        console.log(error, info);   
    }
    
    render() {
        if(this.state.hasError) {
            return <ErrorIndecator/>
        }

        return this.props.children;
    }
}