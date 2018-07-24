import React, { Component } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container theme-showcase" role="main">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h3 className="panel-title">{this.props.title}</h3> 
                        </div>
                        <div className="panel-body" >
                            {this.props.children}
                        </div>
                    </div> 
                </div>                 
            </div>
        );
    }
}

export default Body;