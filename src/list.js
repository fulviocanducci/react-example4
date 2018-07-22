import React, { Component } from 'react';

class List extends Component {    
    render() {
        const retList = (this.props.items && this.props.items.length > 0)
                ? this.props.items.map((value, index) => {
                    return (
                        <li className="list-group-item" key={index}>
                            {value.text}
                            <span className="badge list-cursor-pointer" onClick={() => this.props.countClick(index)}>{value.count}</span>
                        </li>
                    );
                })
                : [];        
        return (
            <div>
                <ul className="list-group">
                {retList}
                </ul>
            </div>
        )
    }
}

export default List;