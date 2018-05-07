import React, { Component } from 'react';

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

export default LikeButton;