import React, { Component } from 'react';
import { BrowserRouter as Link  } from 'react-router-dom';

class MenuItems extends Component {
    render() {
      const result = (this.props.items && this.props.items.length > 0) ?
        this.props.items.map(function(item, key){
            return (<li key={key}><Link to={item.to} >{item.name}</Link></li>);
        }) : null; 
      return (
         result
      );
    }
}

export default MenuItems;