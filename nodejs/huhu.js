var huhu = "hello world"
console.log(huhu);
var fs = require("fs")
fs.readFile("./1.txt", (error, data) => {
    if(error) {
        console.log(error);
        return;
    }
    var dataObj = JSON.parse(data.toString());
    console.log(dataObj);
    dataObj.type = "js工程师"
    fs.writeFile("./newFile.txt", JSON.stringify(dataObj), (error) =>{
        console.log("写入成功");
    })
});