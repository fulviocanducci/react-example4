import React, { Component  } from "react";
import Moment from 'react-moment';
import SweetAlert from 'react-bootstrap-sweetalert';
import Body from "./body";
import axios from 'axios';
import './githubuser.css';

class Githubuser extends Component {

    constructor(props){
        super(props);
        this.state = { userName: '', user: null, repository: null, statusBtn: false, show: false };
        this.refUserName = React.createRef();                  
    }

    componentDidMount () {
        this.onFocusUserName();
    }
    
    onFocusUserName() {
        this.refUserName.current.focus();
    }

    onHandleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    onHandleClickUserInfo(){
        this.setState({statusBtn: true, user: null, repository: null, show: false});                 
        axios.get('https://api.github.com/users/:user'.replace(':user', this.state.userName))
            .then((response) => {
                if (response.status === 200){
                    this.setState({user: response.data});
                    axios.get('https://api.github.com/users/:user/repos'.replace(':user', this.state.userName))
                        .then((response) => {
                            if (response.status === 200) 
                            {
                                this.setState({repository: response.data});
                            }
                        });
                } else {
                    this.setState({ show: true })
                }                                
            })
            .catch(function (error) {
                if (error.response) {                    
                    this.setState({ show: true });
                }                                
            }
            .bind(this))
            .then(function() {
                this.setState({statusBtn: false});
            }.bind(this));
    }

    onHandleClickCancel() {
        this.setState({userName: '', user: null, repository: null, show: false });
        this.onFocusUserName();        
    }

    render() {
        const userInfo = (this.state.user) 
                ?   <div className="thumbnail border-marge">
                        <img src={this.state.user.avatar_url} alt={this.state.user.login} />
                        <div className="caption">
                            <h3>{this.state.user.name || this.state.user.login}</h3>                            
                            <hr style={{marginTop:0,marginBotton:5}} />
                            <div>Seguidores: {this.state.user.followers}</div>
                            <div>Segue: {this.state.user.following}</div>                            
                        </div>
                    </div> 
                :   null;                
        const userRepositories = (this.state.repository && this.state.repository.length > 0)
                ?   this.state.repository.map((item, key) => {
                        return (
                        <div className="thumbnail border-marge" key={key}>                                              
                            <div key={key}><a href={item.html_url} target="_blank">{item.name}</a><hr style={{margin:0}} /></div>
                            <div><code>Criado:</code> <Moment format="DD/MM/YYYY">{item.created_at}</Moment></div>
                            <div><code>Última atualização:</code> <Moment format="DD/MM/YYYY">{item.updated_at}</Moment></div>
                            <div><code>Linguagem:</code> {item.language ?  item.language : 'desconhecida'}</div>
                        </div> 
                        )
                    })                              
                :   null;
        return (
            <Body title="Github - Dados dos usuários">  
                <SweetAlert show={this.state.show} title="Usuário inválido" text="Usuário inválido" onConfirm={() => this.setState({ show: false })} />
                <h4>Informações do usuário</h4>
                <hr className="hr-margin" />
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="input-group">                        
                            <input type="text" ref={this.refUserName} name="userName" onChange={this.onHandleChange.bind(this)} value={this.state.userName} className="form-control" placeholder="Digite o nome do usuário" required/>                    
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.onHandleClickUserInfo.bind(this)} disabled={!(this.state.userName && this.state.userName.length > 0)}><i className={'fa fa-circle-o-notch ' + (this.state.statusBtn?'fa-spin':'')} aria-hidden="true"></i> {(this.state.statusBtn?'Aguarde':'Carregar')}
                                </button>
                                <button className="btn btn-danger" type="button" onClick={this.onHandleClickCancel.bind(this)} ><span className="glyphicon glyphicon-trash"></span></button>
                            </span>
                        </div>
                    </div>   
                    <div className="col-sm-4 col-md-4">
                        {userInfo}
                    </div>
                    <div className="col-sm-8 col-md-8">
                        {userRepositories}
                    </div>
                </div>
            </Body>
        );
    }
}

export default Githubuser;