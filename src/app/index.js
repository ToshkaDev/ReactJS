import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

//parameters handling: path={"user/:id"}. Now in other to navigate to User page I have to write in url filed of the browser:
//localhost:8080/user/<something, som number>, like localhost:8080/user/5
//I put in consta Header: ... Link to={"/user/10"} ... 
class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"user/:id"} component={User}/>
                    <Route path={"home"} component={Home}/>
                </Route> 
                <Route path={"home-single"} component={Home}/>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));