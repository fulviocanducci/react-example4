import React, { Component } from 'react';
import Body from './body';
import DivItem from './components/div-item';
import axios from 'axios';

class Zipcode extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      zip: '',
      result: null
    };
    this.refZip = React.createRef();
  }

  componentDidMount() {
    this.zipFocus();
  }
  
  zipFocus() {
    this.refZip.current.focus();
  }

  findZip() {
    axios.get('http://viacep.com.br/ws/{0}/json/'.replace('{0}', this.state.zip))
      .then((response) => {
        if (response.status === 200){
          this.setState({result: response.data})
        }
      })
      .catch((error) => {

      })
      .then(() => {

      });
  }

  clear() {
    this.setState({zip:'', result: null});
    this.zipFocus();
  }

  checkZip() {    
    if (this.state.zip === '') {
      return true;
    } 
    else if (this.state.zip.length > 7)
    {
      var numberPattern = /^\d+$/;      
      return !numberPattern.test(this.state.zip);
    }
    return true;
  }

  render() {
    const { result } = this.state;
    const resultLi = (result !== null && !result.hasOwnProperty('erro'))
     ?  ( 
        <li className="list-group-item">
          <DivItem value={result.cep}></DivItem>
          <DivItem value={result.localidade}></DivItem>
          <DivItem value={result.logradouro}></DivItem>
          <DivItem value={result.complemento}></DivItem>
          <DivItem value={result.ibge}></DivItem>
          <DivItem value={result.gia}></DivItem>
          <DivItem value={result.unidade}></DivItem>
        </li>
       )
      :  result && result.hasOwnProperty('erro') 
        ? (
            <li className="list-group-item">
              <DivItem value="Dado inválido ou inexistente"></DivItem>
            </li>
          ) 
        : "";
    return (
      <Body title="Busca de Código Postal">
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="input-group">                        
                        <input type="tel" ref={this.refZip} name={this.state.zip} onChange={(e) => this.setState({zip: e.target.value})} value={this.state.zip} className="form-control" placeholder="Digite o número" maxLength="8" required/>                    
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.findZip.bind(this)} disabled={this.checkZip()}>Buscar</button>
                            <button className="btn btn-danger" type="button" onClick={this.clear.bind(this)}><span className="glyphicon glyphicon-trash"></span></button>
                        </span>
                    </div>
                </div>                                        
            </div>
            <ul className="list-group list-margin">                    
                {resultLi}        
            </ul>
        </div>  
      </Body>
    )
  }
}

export default Zipcode;