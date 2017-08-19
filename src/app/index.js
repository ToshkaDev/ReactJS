import React from "react";
import { render } from "react-dom";

//We are in /app folder
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {
    render() {
        var user  = {
            name: "Anna",
            hobbies: ["Sport", "Reading"]
        }
        return (
            //workgin here with bootstrap
            <div className="containr">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={"Vadim"} age={32} user={user}>
                        <p>This is a paragraph</p>    
                    </Home>
                </div>
            </div>

            </div>
        )
    }
} 
//We are rendering this App class in div element with id = "app" in index.html
render(<App/>, window.document.getElementById("app"));