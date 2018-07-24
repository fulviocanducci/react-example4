import React, { Component } from 'react';
import { Item } from './models/item';
import Register from './register';

class List extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            textInfo: '',
            nameInfo: 'textInfo',
            listInfo: []
        };
    }

    onHandleClickButtonAdd() {
        this.state.listInfo.push(new Item(this.state.textInfo));
        this.setState({
            listInfo: this.state.listInfo
        });
    }

    onHandleClickButtonAddCount(index) {               
        let cp = [...this.state.listInfo];
        cp[index].count = (cp[index].count + 1);
        this.setState({
            cp
        });
    }

    onHandleChange(e) {        
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const retList = (this.state.listInfo && this.state.listInfo.length > 0)
                ? this.state.listInfo.map((value, index) => {
                    return (
                        <li className="list-group-item" key={index}>
                            {value.text}
                            <span className="badge list-cursor-pointer" onClick={this.onHandleClickButtonAddCount.bind(this, index)}>{value.count}</span>
                        </li>
                    );
                })
                : null;        
        return (
            <div>
                <div className="container theme-showcase" role="main">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                        <h3 className="panel-title">Lista de Informações</h3> 
                        </div>
                        <div className="panel-body" >
                            <Register 
                                name={this.state.nameInfo} 
                                text={this.state.textInfo} 
                                change={this.onHandleChange.bind(this)}
                                click={this.onHandleClickButtonAdd.bind(this)} />                            
                            <br />
                            <ul className="list-group">
                                {retList}
                            </ul>     
                        </div>
                    </div> 
                </div>                 
            </div>
        )
    }
}

export default List;