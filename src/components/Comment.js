import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComponent: PropTypes.func,
        index: PropTypes.number
    }
    constructor(){
        super()
        this.state = {
            timeString: ''
        }
    }
    /**
     * 组件挂载时,设置发布时间
     */
    componentWillMount(){
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this), 5000)
    }
    /**
     * 组件卸载的时候清除计时器
     */
    componentWillUnmount(){
        clearInterval(this._timer)
    }
    /**
     * 更新发布时间
     */
    _updateTimeString(){
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    /**
     * 
     */
    _getProcessedContent(content){
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    /**
     * 删除评论的回调
     * 点击删除时,向父级传递index
     */
    handleDeleteComment () {
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }
    render() {
        const { comment } = this.props
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username} </span>：
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(comment.content)
                }} />
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete'
                    onClick={this.handleDeleteComment.bind(this)}>删除</span>
            </div>
        );
    }
}

export default Comment;