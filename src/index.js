// webpack入口文件
import React from "react"
import ReactDOM from "react-dom"
// import data from './config.json'
import "@/index.less"

import Router from "@/router"
// import Menu from '@/pages/Menu/Menu'
// import Identity from '@/pages/Identity/Identity'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

import Menu from "@/pages/Menu/Menu"
import Identity from "@/pages/Identity/Identity"
import GameMain from "@/pages/GameMain/GameMain"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

// 引入antd样式
import "antd/dist/antd.css"

// import Hello from '@/components/Hello'
// import HuhuComponent from "./components/Huhu"

// function add(x, y) {
//     return x + y;
// }
// console.log(add(1, 2));

// // 使用react创建虚拟DOM元素
// const helloWorld = React.createElement("div", null, "hello world");
// ReactDOM.render(helloWorld, document.getElementById("rq"));

// // 使用JSX(需要先引入babel)
// let a = "helloJSXX"
// const helloJSX = <div id="mydiv">{a}</div>
// ReactDOM.render(helloJSX, document.getElementById("rq"));
// let arr = ["div1", "div2"];
// const emptyArr = [];
// arr.forEach(item => {
//     const temp = <p key={item}>{item}</p>
//     emptyArr.push(temp)
// })

// ReactDOM.render(emptyArr, document.getElementById("rq1"));
// // react需要把key 添加给被map的元素
// const result = arr.map((item, index) => {
//     return <h1 key={index}>{item}</h1>
// })
// ReactDOM.render(result, document.getElementById("rq2"));

// let hero = {
//     name: "huhu583",
//     age: 12
// };
// // 展开运算符
// ReactDOM.render(<Hello {...hero}></Hello>, document.getElementById("zj"));

// ReactDOM.render(<HuhuComponent {...hero}></HuhuComponent>, document.getElementById("zj1"));

ReactDOM.render(<Router />, document.getElementById("main"));
// ReactDOM.render(<Menu></Menu>, document.getElementById("main"));

// ReactDOM.render(<Identity></Identity>, document.getElementById("main"));
// ReactDOM.render(<Menu></Menu>, document.getElementById("main"));
// ReactDOM.render(<GameMain />, document.getElementById("main"));
// ReactDOM.render(<Bottom />, document.getElementById("main"));

