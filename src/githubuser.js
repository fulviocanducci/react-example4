import React, { Component  } from "react";
import Body from "./body";
import axios from 'axios';
import './githubuser.css';

class Githubuser extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            user: null,
            repository: null,
        };
    }
    onHandleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    onHandleClickUserInfo(){
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
                    alert("Usuário inválido");
                }
            });
    }

    onHandleClickCancel() {
        this.setState({
            userName: '',
            user: null,
            repository: null,
        });
    }

    render() {
        const userInfo = (this.state.user) 
                ?   <div className="thumbnail border-marge">
                        <img src={this.state.user.avatar_url} alt={this.state.user.login} />
                        <div className="caption">
                            <h3>{this.state.user.login}</h3>
                            <p>...</p>                        
                        </div>
                    </div> 
                :   null;
        const userRepositories = (this.state.repository && this.state.repository.length > 0)
                ?                       
                    this.state.repository.map((item, key) => {
                        return (
                        <div className="thumbnail border-marge" key={key}>  
                            <div>
                                <h5>{item.name}</h5>                            
                            </div>                      
                            <div key={key}><a href="{item.html_url}" target="_blank">{item.name}</a></div>
                            <div>Criado em: {item.created_at}</div>
                        </div> 
                        )
                    })                              
                :   null;
        return (
            <Body title="Github - Dados dos usuários">
                <h4>Informações do usuário</h4>
                <hr className="hr-margin" />
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="input-group">                        
                            <input type="text" name="userName" onChange={this.onHandleChange.bind(this)} value={this.state.userName} className="form-control" placeholder="Digite o nome do usuário" required/>                    
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.onHandleClickUserInfo.bind(this)} disabled={!(this.state.userName && this.state.userName.length > 0)}>Carregar</button>
                                <button className="btn btn-danger" type="button" onClick={this.onHandleClickCancel.bind(this)} ><span class="glyphicon glyphicon-trash"></span></button>
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