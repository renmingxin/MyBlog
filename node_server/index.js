var express = require("express");

var app = new express();

app.use(express.static("dist/"));

app.listen(8090,function(){
    console.log("服务器已经启动")
})