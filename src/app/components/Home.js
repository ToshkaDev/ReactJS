import React from "react";

//js exprssion: {}
//this.props is from React.Component
//<li key={i}>{hobby}</li> , key is to give unique id. i is iteration numnber form 0
//onClick={this.makeOlder.bind(this)} or onClick={() => this.makeOlder()}. I need this, just this.makeOlder will not work, beacuse this will refer
//not to class object Home buut to button.
//But this still will not be rendered. It will be rendered when th 'state' will change
export class Home extends React.Component {
    constructor(props) {
        super();
        this.age=props.age;
    }

    makeOlder() {
        this.age+=3;
        console.log(this.age);
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>You name is: {this.props.name}, you age is {this.age}</p>
                <hr/>
                <button onClick={() => this.makeOlder()} className="btn btn-primary"> Make me older </button>
            </div>

        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number
}