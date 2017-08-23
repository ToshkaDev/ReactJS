
import React from "react";

import {Header} from "./Header";

//Because of this {this.props.children} the following is possible:
//<Router history={browserHistory}>
//<Route path={"/"} component={Root}>
//    <Route path={"user"} component={User}/>
//    <Route path={"home"} component={Home}/>
//</Route> 
//<Route path={"home"} component={Home}/>
//</Router>
//Rect loads the subroute in place of {this.props.children}
export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}