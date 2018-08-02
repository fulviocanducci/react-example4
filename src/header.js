import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import { MenuContextItem } from './context/menu-context';
import './header.css';
class Header extends Component { 
    
    componentDidMount() {             
        var jQueryInstance = window.$;
        jQueryInstance('.navbar-nav li a').on('click', function () {
            jQueryInstance(".navbar-collapse").collapse('hide');
        });
    }

    renderMenuItem() {
        const { values } = MenuContextItem;        
        return (values && values.length > 0) 
            ?   values.map(function(item, key){
                    return (<li key={key}><Link to={item.to} >{item.name}</Link></li>);
                }) 
            : null;     
    }          

    renderRouteItem() {
        const { values } = MenuContextItem;
        return (values && values.length > 0) 
            ?   values.map(function(item, key){
                return (<Route key={key} exact path={item.to} component={item.component} />);
            }) 
            : null;
    }
    
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
                                {this.renderMenuItem()}
                            </ul>                        
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        {this.renderRouteItem()}
                    </Switch>                    
                </div>                                                
            </Router>              
        );
    }
}

export default Header;