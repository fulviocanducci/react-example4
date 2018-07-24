import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

import './header.css';

import Home from './home.js';
import List from './list.js';
import Count from './count.js';
import Githubuser from './githubuser.js';

//https://www.tutorialspoint.com/reactjs/reactjs_router.htm
//https://reacttraining.com/react-router/web/example/basic

class Header extends Component {       
    render() {               
        return (            
            <Router history="">
                <div>                                   
                    <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand">React Project</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to={'/'} >Home</Link></li>
                            <li><Link to={'/list'} >Lista</Link></li>                            
                            <li><Link to={'/count'} >Contador</Link></li>   
                            <li><Link to={'/githubuser'} >GitHub Usuario</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu de Opções <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    {/*<li className="dropdown-header">Opções</li>*/}
                                    <li><Link to={'/'} >Home</Link></li>
                                    <li role="separator" className="divider"></li>
                                    <li><Link to={'/list'} >Lista</Link></li>
                                    <li role="separator" className="divider"></li>
                                    <li><Link to={'/count'} >Contador</Link></li>                                    
                                    <li role="separator" className="divider"></li>
                                    <li><Link to={'/githubuser'} >GitHub Usuario</Link></li>  
                                </ul>
                            </li>
                        </ul>                        
                        </div>
                    </div>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/list' component={List} />
                        <Route exact path='/count' component={Count} />
                        <Route exact path='/githubuser' component={Githubuser} />
                    </Switch>
                </div>                                                
            </Router>              
        );
    }
}

export default Header;