var exp=require("express");

var app=exp();

var productsservice=function(req,res){

     var product=[
         {id:1,title:"Rose",description:"Valentine flower",unitprice:20,quantity:200},
         {id:2,title:"Lotus",description:"Worship flower",unitprice:30,quantity:2400},
         {id:3,title:"Gerbera",description:"Wedding flower",unitprice:15,quantity:1200},
         {id:4,title:"Marigold",description:"festival flower",unitprice:34,quantity:5000},
         {id:5,title:"Jasmin",description:"Smelling flower",unitprice:10,quantity:3000}
     ];
     res.send(product);

};
app.get('/products',productsservice);

var server=app.listen(8086,function(){
    console.log("Server started port at 8086..");
});
