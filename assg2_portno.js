
var h=require('http');

var server=h.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("<h1> Hello From Node JS </h1>");
res.end();
});

server.listen(9000);
console.log("server started on port number 9000");