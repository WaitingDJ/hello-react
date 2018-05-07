import React, { Component } from 'react';

class PropsChildren extends Component {
    render() {
        return (
            <div onClick={ () => console.log(this.props.children)}>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default PropsChildren;