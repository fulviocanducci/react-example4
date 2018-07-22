import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Register from './register';
import List from './list';
import { Item } from './models/item';

class App extends Component {

  constructor() {
    super();
    this.state = {
      textInfo: '',
      nameInfo: 'textInfo',
      listInfo: []
    };
  }

  onHandleClickButtonAdd() {    
    this.state.listInfo.push(new Item(this.state.textInfo));
    this.setState({listInfo: this.state.listInfo});
  }

  onHandleClickButtonAddCount(index) {
    /*
    this.state.listInfo[index].count++;
    this.setState({listInfo: this.state.listInfo});    
    */
    let cp = [...this.state.listInfo];
    cp[index].count = (cp[index].count + 1);
    this.setState({cp});
  }

  onHandleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  render() {
    return ( 
      <div>
        <Header title="Página React Test"></Header>
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
                click={this.onHandleClickButtonAdd.bind(this)}>
              </Register>
              <br />
              <List 
                items={this.state.listInfo} 
                countClick={this.onHandleClickButtonAddCount.bind(this)}>
              </List>
            </div>
        </div> 
        </div> 
      </div>
    );
  }

}

export default App;