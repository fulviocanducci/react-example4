import React, { Component } from 'react';
import { BrowserRouter as Route  } from 'react-router-dom';

class MenuRouteItem extends Component {
  render() {
    const routeItem =  (this.props.items && this.props.items.length > 0) ?
            this.props.items.map(function(item, key){
                return (<Route key={key} exact path={item.to} component={item.component} />);
            }) : null;
    return (
      routeItem
    );
  }
}

export default MenuRouteItem;