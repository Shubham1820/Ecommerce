var h=require('http');
var url=require('url');

var server=h.createServer(function(req,res){
     var url_parts=url.parse(req.url,true);
     var name=url_parts.query.name;
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write("<h1> Welcome "+name+"</h1>");
     res.end();     
      
});

server.listen(9000);
console.log("server started on port number 9000");