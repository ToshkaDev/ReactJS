import React from "react";

//js exprssion: {}
//this.props is from React.Component
//<li key={i}>{hobby}</li> , key is to give unique id. i is iteration numnber form 0
//onClick={this.makeOlder.bind(this)} or onClick={() => this.makeOlder()}. I need this, just this.makeOlder will not work, beacuse this will refer
//not to class object Home buut to button.
//1) But this still will not be rendered. It will be rendered when the 'state' will change.
//2) So, here we are updating age using this.state.age expression.
export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            //or age: props.age; by initialAge we emphasize that this is an inirial value
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    makeOlder() {
        //setState is inherited from React.Component
        this.setState({
            age: this.state.age + 3
        });
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>You name is: {this.props.name}, you age is {this.state.age}</p>
                <p>Status is: {this.state.status}</p>

                <hr/>
                <button onClick={() => this.makeOlder()} className="btn btn-primary"> Make me older </button>
            </div>

        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number
}