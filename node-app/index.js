const http = require('http')

http.createServer(function(req, res){
    console.log('request recieved')
    res.end("hello world", "utf-8")
})
.listen(3000);
console.log("server started")