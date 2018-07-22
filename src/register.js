import React, { Component } from 'react';

class Register extends Component {    
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="input-group">                        
                        <input type="text" name={this.props.name} onChange={this.props.change} value={this.props.text} className="form-control" placeholder="Digite a informação ..." />                    
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.props.click}>Adicionar</button>
                        </span>
                    </div>
                </div>            
            </div>
        );
    }
}

export default Register;