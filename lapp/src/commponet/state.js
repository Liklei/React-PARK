/*
 * @Author: your name
 * @Date: 2021-03-21 20:53:24
 * @LastEditTime: 2021-03-21 21:09:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editthis
 * @FilePath: \knowTech\React-PARK\lapp\src\commponet\state.js
 */

import React, { Component } from 'react'

 class State extends Component {
    state = {
        num: 0
    } 
    render() {
        return (
            <div>
                one - {this.state.num} 
                <button onClick = {
                    () => {
                        this.setState({
                            num: this.state.num + 1
                        })
                    }
                }>button</button>
            </div>
           
        )
    }
}

export default State

