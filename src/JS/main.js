// webpack入口文件
import React from "react"
import ReactDOM from "react-dom"
import data from './data.json'
import '../CSS/index.less'
console.log(data);
console.log("huhu583");

function add (x, y) {
    return x+y;
}
console.log(add(1,2));

// 使用react创建虚拟DOM元素
const helloWorld = React.createElement("div",null,"hello world");
ReactDOM.render(helloWorld, document.getElementById("rq"));