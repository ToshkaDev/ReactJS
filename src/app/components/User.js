import React from "react";
//this import needs for navigation (here  browserHistory.push("/home");)
import { browserHistory } from "react-router";

//in {this.props.params.id} React is sends everything in props and in params we have parameters.
//'id' is  the name I choose in index.js: <Route path={"user/:id"} component={User}/> 
export class User extends React.Component {
    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}