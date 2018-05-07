import React, { Component } from 'react';

class FocusInput extends Component {
    constructor(){
        super()
        this.state = {
            height: 0
        }
    }
    componentDidMount(){
        this.input.focus()
        const pHeight = this.input.offsetHeight;
        this.setState({
            height: pHeight
        })
    }
    render() {
        return (
            <div>
                <input ref={(e) => this.input = e}
                onClick={() => console.log(this.state.height)} />
            </div>
        );
    }
}

export default FocusInput;