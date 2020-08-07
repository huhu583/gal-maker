// 在Node中模块有三种
// 具名的核心模块,如fs,http
// 用户自己编写的文件模块
// require("./noteTest.js")
// 可以省略后缀名
// require("./noteTest")

// 在node中，没有全局作用域，只有模块作用域
// 外侧不能访问内侧,内也不能访问外
// 那么如何通信呢？
// 可以拿到导出的接口对象
var noteText = require("./noteTest");
console.log(noteText)