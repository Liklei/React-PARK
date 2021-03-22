/*
 * @Author: your name
 * @Date: 2021-03-22 22:02:26
 * @LastEditTime: 2021-03-22 22:57:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\React-PARK\lapp\src\hooks\States.js
 */
import React, {useState} from 'react'

function States() {
    const [numbers, setNumbers] = useState(20)
    return (
        <div>
            <p>{ numbers }</p>
            <button onClick={() => setNumbers(numbers + 1)}>设置数字</button>
        </div>
    )
}

export default States

