import React from "react";

//js exprssion: {}
//this.props is from React.Component
//<li key={i}>{hobby}</li> , key is to give unique id. i is iteration numnber form 0
export class Home extends React.Component {
    render() {
        var text = "Hey";
        return (
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>You name is: {this.props.name}, you age is {this.props.age}</p>
                <p>Usr Object => name {this.props.user.name} </p>
                <div>
                    <h4>Hobbies</h4>
                    <ul> 
                        {this.props.user.hobbies.map((hobby, i ) => <li key={i}>{hobby}</li>)}
                    </ul>  
                </div>
                {this.props.children}

            </div>

        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.isRequired
}