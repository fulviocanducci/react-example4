import React, { Component } from 'react';
import { Item } from './models/item';
import Register from './register';
import Body from './body.js';

class List extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            textInfo: '',
            nameInfo: 'textInfo',
            listInfo: []
        };
        this.refName = React.createRef();
        this.onFocusRefName = this.onFocusRefName.bind(this);
    }

    componentDidMount () {
        this.onFocusRefName();
    }

    onHandleClickButtonAdd() {
        if (this.state.textInfo && this.state.textInfo.length > 0) {
            this.state.listInfo.push(new Item(this.state.textInfo));
            this.setState({ listInfo: this.state.listInfo, textInfo: '' });
            this.onFocusRefName();
        } else {

        }        
    }

    onHandleClickButtonAddCount(index) {               
        let cp = [...this.state.listInfo];
        cp[index].count = (cp[index].count + 1);
        this.setState({ cp });
    }

    onHandleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    onHandleClickButtonCancel() {
        this.setState({
            textInfo: '',
            listInfo: []
        });
        this.onFocusRefName();
    }

    onFocusRefName() {
        this.refName.current.focus();
    }

    render() {              
        return (
            <Body title="Lista de Informações">
                <Register 
                    name={this.state.nameInfo} 
                    refName={this.refName}
                    text={this.state.textInfo} 
                    change={this.onHandleChange.bind(this)}
                    click={this.onHandleClickButtonAdd.bind(this)}
                    listInfo={this.state.listInfo}
                    clickCount={this.onHandleClickButtonAddCount.bind(this)}
                    clickCancel={this.onHandleClickButtonCancel.bind(this)} />
            </Body>
        )
    }
}

export default List;