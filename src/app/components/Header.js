import React from "react";
import {Link} from "react-router";

//Conditional stylings: activeStyle={{color:"Red"}}, activeClassName={"active"}
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navb-header"> 
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{color:"Red"}}>Home</Link></li>
                        <li><Link to={"/user/10"} activeClassName={"active"}>User</Link></li>
                    </ul>
                </div> 
            </div>
        </nav>
    );
};