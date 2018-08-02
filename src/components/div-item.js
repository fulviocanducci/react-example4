import React, { Component } from 'react';

class DivItem extends Component {
  render() {
    return (
        this.props.value && this.props.value !== '' 
         ? <div>{this.props.value}</div>
         : ''
    );
  }
}

export default DivItem;