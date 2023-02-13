var express = require('express')
var app = express()
const fs = require("fs");


const path = "./output.json";

app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));

fs.writeFileSync(path, '{"list": []}');
const data = fs.readFileSync(path, { encoding: "utf8", flag: "r" });

const obj = JSON.parse(data);




app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html")
})
app.post('/showData',function(req,res){
    datasub= {
        fname: req.body.fname,
        lname: req.body.lname,
        result: parseInt(req.body.n_one)+parseInt(req.body.n_two)
    }
    obj.list.push(datasub)
    console.log(obj.list)
    fs.writeFileSync(path,JSON.stringify(obj));
    res.end(JSON.stringify(obj.list))
    
})

app.listen(8081)