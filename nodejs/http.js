// 使用 Node 构建web服务器
let http = require("http");

// 创建web服务器
let server = http.createServer();

// 提供服务

server.on("request", (request, response) => {
    // 接收到请求时回调处理函数
    console.log("收到客户端的请求了" + request.url);

    // 响应客户端请求
    // write可以用来给客户端发送消息
    // write可以使用多次, 但是最后一定要end来结束
    // 结合url进行向应


    // response.end();
    const url = request.url;
    // 告诉浏览器按什么编码来解析
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if(url === "/") {
        response.end("index");
    }
    else if (url == "/login") {
        response.end("login");
    }
    else {
        // 直接end的同时发送响应数据
        response.end("404 NOT Found");
    }

    // response.end响应对象只能是字符串或者是二进制数据
}); 

// 绑定端口号,启动服务器
server.listen(5838, ()=>{
    // 服务器开启需要时间
    console.log("服务器启动成功");
})

// node.js中的核心模块
// 文件操作 fs
// http服务 http
// 路径操作 path
// 操作系统 os
// 