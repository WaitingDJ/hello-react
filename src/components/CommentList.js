import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }
    /**
     * 继续向父级传递被删除的评论的index
     */
    handleDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => 
                    <Comment comment={comment}
                        key={i}
                        index={i}
                        onDeleteComment={this.handleDeleteComment.bind(this)} />
                )}
            </div>
        );
    }
}

export default CommentList;