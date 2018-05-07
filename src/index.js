import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import List from './list/List'
import ComponentApp from './comment/CommentApp'
import Clock from './clock/Clock'
import LikeButton from './likeButton/LikeButton'
import FocusInput from './input/FocusInput'

class Index extends Component {

    render() {
        return (
            <div className='wrapper' >
                <ComponentApp />
                <FocusInput />
                <Clock />
                <LikeButton wording={{ likedText: '已赞', unlikedText: '点赞' }}
                    onClick={() => { console.log('click over') }} />
                <List />
            </div>
        )
    }
}

ReactDOM.render(< Index />, document.getElementById('root'))

//生产环境!的资源的缓存,更快的获取资源,离线的情况下也可以访问应用
registerServiceWorker();