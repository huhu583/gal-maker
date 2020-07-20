import React from "react"

// 组件练习
export default function Hello(props) {
    return <div>我是{props.name}{props.age}</div>
}

// 把组件暴露出去
// export default Hello

// 使用function 创建的组件没有自己的私有数据和生命周期函数