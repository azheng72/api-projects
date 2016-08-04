var express=require("express");
var app=express();
app.get('/:date',function(req,res){
    if(/^\d+/.test(req.params.date)) req.params.date=parseInt(req.params.date)*1000;
    var date=new Date(req.params.date);
    if(date.getTime()!==date.getTime()) {
        var result = {  unix:null,natural:null};
        
    }
    else{
        var options = {  year: 'numeric', month: 'long', day: 'numeric' };
        var result = {  unix:Math.round(date.getTime()/1000),natural:date.toLocaleDateString('en-US', options)};
    }
    res.json(result);
    res.end();
});
app.listen(8080,function(){
    console.log("listen to port : 8080");
});