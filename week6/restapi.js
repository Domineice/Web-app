var express = require('express')
var app = express()
var user = require('./user.json')

app.get('/getuser',function(req,res){
    console.log(user);
    res.send(user);
})
var userr = {
    "user4":{
        name : 'bew',
        password : "000000",
        occupation : 'engineer',
        id: 4
    }
}

app.get('/getuser/:id',function(req,res){
    var one_user = user["user"+req.params.id]
    console.log(one_user);
    res.send(one_user);
})

app.post('/adduser',function(req,res){
    user["user4"] = userr["user4"];
    console.log(userr);
    res.send(userr);
})
var server = app.listen(8081,function(){
    var port = server.address().port
    console.log("App is running at http://127.0.0.1:%s",port);
})