var http=require('http');
var pageCount=0;
var fs=require('fs');

var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url!=='/favicon.ico')
    { 
     pageCount++;
    }
    console.log("There are currently"+ pageCount +" views");
    var data=pageCount;

    fs.writeFile('count.txt',data,function(err){
     if(err)
     throw err;
     console.log("Saved..");
});
   
    fs.readFile('count.txt',function(err,data){
     if(err){
        return console.error(err);
     }
     return res.end('Visit Count ${data}');
   
});

});

server.listen(9000);
console.log("Server started on port no 9000 ");