/*
 * @Author: lance
 * @Date: 2021-03-22 22:34:01
 * @LastEditTime: 2021-03-22 22:59:03
 * @Description: useState Map
 * @FilePath: \knowTech\React-PARK\lapp\src\hooks\useStateMap.js
 */
import React, { useState } from 'react'

const firstWordUpperCase = (str) => () => str.toLowerCase().replace(/(\s|^)[a-z]/g, (char) => char.toUpperCase())

export default function useStateMap(values) {
    return Object.keys(values).map(function(item){
        let items = firstWordUpperCase(item)(),
            setName = `set{items}`
        const [item, setName] = useState(values[item])
    })
}
