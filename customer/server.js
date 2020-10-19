var exp=require("express");

 var app=exp();

 var cutomerservice=function(req,res){

    var cust=[
        {Firstname:"Shubham",Lastname:"Pawar",Age:24},
        {Firstname:"Pinki",Lastname:"Mule",Age:23},
        {Firstname:"Dhiraj",Lastname:"Bodhale",Age:24},
        {Firstname:"Pranita",Lastname:"Bhosale",Age:24},
        {Firstname:"Snehalta",Lastname:"Dakare",Age:23}
    ];
    res.send(cust);

 };
 app.get('/customers',cutomerservice);

 var server=app.listen(8088,function(){
     console.log("Server Started at port 8088...");
 });