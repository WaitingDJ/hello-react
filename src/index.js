import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import List from './list/List'
import ComponentApp from './comment/CommentApp'
import Clock from './clock/Clock'
import LikeButton from './likeButton/LikeButton'
import PropsChildren from './propsChildren/PropsChildren'

class Index extends Component {

    render() {
        return (
            <div className='wrapper' >
                <ComponentApp />
                <Clock />
                <LikeButton wording={{ likedText: '已赞', unlikedText: '点赞' }}
                    onClick={() => { console.log('click over') }} />
                <List />
                <PropsChildren children={
                    <div>
                        <h2>React.js 小书</h2>
                        <div>开源、免费、专业、简单</div>
                        订阅：<input />
                    </div>
                } />
            </div>
        )
    }
}

ReactDOM.render(< Index />, document.getElementById('root'))

//生产环境!的资源的缓存,更快的获取资源,离线的情况下也可以访问应用
registerServiceWorker();