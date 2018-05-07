import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CommentInput extends Component {
    /**
     * 参数验证
     */
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    /**
     * 挂载之前读取缓存用户
     */
    componentWillMount(){
        this._loadUsername()
    }
    /**
     * 组件挂载之后
     *      input聚焦
     */
    componentDidMount(){
        this.textarea.focus();
    }
    /**
     * 设置缓存用户名
     */
    _saveUsername(username){
        localStorage.setItem('username', username)
    }
    /**
     * 读取(是否有)缓存的用户名
     */
    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({ username })
        }
    }
    /**
     * input失去焦点缓存用户名 
     */
    handleUsernameBlur(event){
        this._saveUsername(event.target.value)
    }
    /**
     * 同步用户输入的username
     */
    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }
    /**
     * 同步用户输入的content
     */
    handleContentChange(event){
        this.setState({
            content: event.target.value
        })
    }
    /**
     * 用户点击发布按钮
     */
    handleSubmit(){
        if (this.props.onSubmit) {
            this.props.onSubmit({
              username: this.state.username,
              content: this.state.content,
              createdTime: +new Date()
            })
          }
          this.setState({ content: '' })
    }

    render() {
        return (
            <div className='comment-input'>
            <div className='comment-field'>
              <span className='comment-field-name'>用户名：</span>
              <div className='comment-field-input'>
                <input value={this.state.username}
                    onBlur={this.handleUsernameBlur.bind(this)}
                    onChange={this.handleUsernameChange.bind(this)}/>
              </div>
            </div>
            <div className='comment-field'>
              <span className='comment-field-name'>评论内容：</span>
              <div className='comment-field-input'>
                <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content}
                    onChange={this.handleContentChange.bind(this)}/>
              </div>
            </div>
            <div className='comment-field-button'>
              <button onClick={this.handleSubmit.bind(this)}>
                发布
              </button>
            </div>
          </div>
        );
    }
}

export default CommentInput;