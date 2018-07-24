import React, { Component } from "react";
import Body from "./body";

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    onMoreOne(){
        this.setState({count: this.state.count + 1});
    }
    render() {
        return (
            <Body title="Contador um mais um">
                <div className="well well-sm"><code>Quantidade até o momento:</code> {this.state.count}</div>
                <button className="btn btn-success btn-block" type="button" onClick={this.onMoreOne.bind(this)}>Adicionar</button>
            </Body>
        );
    }
}

export default Count;
