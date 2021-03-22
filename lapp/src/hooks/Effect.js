/*
 * @Author: lance
 * @Date: 2021-03-22 22:59:58
 * @LastEditTime: 2021-03-22 23:26:44
 * @FilePath: \knowTech\React-PARK\lapp\src\hooks\Effect.js
 */
import React , { useState, useEffect } from 'react'

export default function Effects() {
    const [time, setTime] = useState(new Date())
    let timer = null
    useEffect(() => {
        setTime(new Date())
        console.log("组件初始化")
    }, [])
    useEffect(() => {
        return () => {
            timer = null
            console.log("组件重新加载")
        }
    }, [time])
    return (
        <div>
            <p>{time.toGMTString()}</p>
            <button onClick={() => setTime(new Date())}>更新时间</button>
        </div>
    )
}

