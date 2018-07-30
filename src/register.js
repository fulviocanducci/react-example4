import React, { Component } from 'react';
import './register.css';
class Register extends Component {   
    render() {
        const retList = (this.props.listInfo && this.props.listInfo.length > 0)
                ? this.props.listInfo.map((value, index) => {
                    return (
                        <li className="list-group-item" key={index}>
                            {value.text}
                            <span className="badge list-cursor-pointer" onClick={(e) => this.props.clickCount(index)}>{value.count}</span>
                        </li>
                    );
                })
                : null; 
        return (     
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="input-group">                        
                            <input type="text" name={this.props.name} onChange={this.props.change} value={this.props.text} className="form-control" placeholder="Digite a informação ..." required/>                    
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.props.click} disabled={!(this.props.text && this.props.text.length > 0)}>Adicionar</button>
                                <button className="btn btn-danger" type="button" onClick={this.props.clickCancel.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>
                            </span>
                        </div>
                    </div>                                        
                </div>  
                <ul className="list-group list-margin">
                    {retList}
                </ul>
            </div>        
        );
    }
}

export default Register;