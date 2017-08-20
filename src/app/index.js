import React from "react";
import { render } from "react-dom";

//We are in /app folder
import { Header } from "./components/Header";
import { Home } from "./components/Home";

//I don't need to write greet={this.onGreet} as greet={this.onGreet.bind(this)}, because
//in onGreet() function I don't use 'this' keyword
class App extends React.Component {

    constructor() {
        super();
        this.state={
            homeLink: "Home"
        };
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        return(
            //workgin here with bootstrap
            <div className="containr">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={"Vadim"} 
                    initialAge={32} 
                    greet={this.onGreet}
                    changeLink={this.onChangeLinkName.bind(this)}/>
                </div>
            </div>

            </div>
        )
    }
} 
//We are rendering this App class in div element with id = "app" in index.html
render(<App/>, window.document.getElementById("app"));