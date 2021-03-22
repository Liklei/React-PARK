/*
 * @Author: your name
 * @Date: 2021-03-21 20:53:24
 * @LastEditTime: 2021-03-22 22:56:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editthis
 * @FilePath: \knowTech\React-PARK\lapp\src\commponet\state.js
 */

import React, { Component } from 'react'

 class State extends Component {
    state = {
        num: 20
    } 
    render() {
        return (
            <div>
                <p>one - {this.state.num}</p>  
                <button onClick = {
                    () => {
                        this.setState({
                            num: this.state.num + 1
                        })
                    }
                }>设置数字</button>
            </div>
           
        )
    }
}

export default State

