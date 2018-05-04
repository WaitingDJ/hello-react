import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import List from './list/List'
import ComponentApp from './comment/CommentApp'

class Index extends Component {
    render(){
        return (
            <div>
                <ComponentApp />
                <LikeButton wording={{likedText: '已赞', unlikedText: '点赞'}} 
                onClick={() => {console.log('click over')}} />
                <List />
            </div>
        )
    }
}

class LikeButton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor(){
        super()
        this.state = { isLiked: false }
    }

    handleClickButton (){
        this.setState({
            isLiked: !this.state.isLiked
        })
        if(this.props.onClick){
            this.props.onClick();
        }
    }

    render(){
        // const wordong = this.props.wording || {likedText: '取消', unlikedText: '点赞'}
        return(
            <button onClick={this.handleClickButton.bind(this)}>
                {this.state.isLiked ? this.props.likedText : this.props.unlikedText }👍
            </button>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'))

//生产环境!的资源的缓存,更快的获取资源,离线的情况下也可以访问应用
registerServiceWorker();
