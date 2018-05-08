import React, { Component } from 'react';
import PropTypes from 'prop-types'

class context extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string,
        myTitle: PropTypes.string
    }

    constructor(){
        super()
        this.state = {
            themeColor: 'green',
            myTitle: 'red'
        }
    }

    getChildContext(){
        return { 
            themeColor: this.state.themeColor,
            myTitle: this.state.myTitle
         }
    }

    render () {
    return (
        <div>
        <Header />
        <Main />
        </div>
    )
    }
}

class Header extends Component {
    render () {
    return (
    <div>
        <h2>This is header</h2>
        <Title />
    </div>
    )
    }
}

class Main extends Component {
    render () {
    return (
    <div>
        <h2>This is main</h2>
        <Content />
    </div>
    )
    }
}

class Title extends Component {
    static contextTypes = {
        themeColor: PropTypes.string
    }
    render () {
        const context = `react context 用getchildContext(){return{**:this.state.**}},并且需要childContextTypes声明和验证`
    return (
    <h1 style={{ color: this.context.themeColor }}>{context}</h1>
    )
    }
}

class Content extends Component {
    static contextTypes = {
        myTitle: PropTypes.string
    }
    render () {
    return (
    <div>
        <h2 style={{ color: this.context.myTitle}}>react context 使用this.context.*** 获取,并且需要contextTypes声明和验证</h2>
    </div>
    )
    }
}

export default context;