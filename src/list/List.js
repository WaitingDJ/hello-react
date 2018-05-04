import React, { Component } from 'react';

//列表数据
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ]

  //渲染单个用户数据
class User extends Component {
    render () {
        const { user } = this.props
        return (
            <div>
                <div>姓名: {user.username}</div>
                <div>年龄: {user.age}</div>
                <div>性别: {user.gender}</div>
            </div>
        )
    }
}

//用map遍历所有用户数据
class List extends Component {
    render() {
        return (
            <div>
                {users.map((user, i) => <User user={user} key={i} />)}
            </div>
        )
    }
}

export default List;