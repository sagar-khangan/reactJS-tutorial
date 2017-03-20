import React from "react";
import {browserHistory} from "react-router";

export class User extends React.Component{
    onNavHome(){
        browserHistory.push("/home")
    }
    render(){
        return (
            <div>
                <h3>The user page</h3>
                <p>User id: {this.props.params.id}</p>
                <button class=" btn btn-primary" onClick={this.onNavHome}>GO Home!</button>
            </div>
        );
    }
}