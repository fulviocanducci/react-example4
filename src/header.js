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
    constructor(props) {
        super(props);
        this.state = {
            menus: [{
                    to: '/',
                    name: 'Home',
                    component: Home
                }, {
                    to: '/list',
                    name: 'Lista',
                    component: List
                }, {
                    to: '/count',
                    name: 'Contador',
                    component: Count
                }, {
                    to: '/githubuser',
                    name: 'GitHub Usuario',
                    component: Githubuser
                }
            ]
        };
    }    

    componentDidMount() {            
        var jQueryInstance = window['$'];
        jQueryInstance('.navbar-nav li a').on('click', function () {
            jQueryInstance(".navbar-collapse").collapse('hide');
        });
    }
          
    render() {         
        const menuItem = (this.state.menus && this.state.menus.length > 0) ?
            this.state.menus.map(function(item, key){
                return (<li key={key}><Link to={item.to} >{item.name}</Link></li>);
            }) : [];  
        const routeItem =  (this.state.menus && this.state.menus.length > 0) ?
            this.state.menus.map(function(item, key){
                return (<Route key={key} exact path={item.to} component={item.component} />);
            }) : [];          
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
                            {menuItem}
                        </ul>                        
                        </div>
                    </div>
                    </nav>
                    <Switch>
                        {routeItem}
                    </Switch>                    
                </div>                                                
            </Router>              
        );
    }
}

export default Header;