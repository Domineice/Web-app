// var http = require('http'); 
// http.createServer(function (request, response) {
//     response.writeHead(200,
//      {
//          'Content-Type': 'text/plain'
//     });
//     response.end('Hello World\n');
// }).listen(8800);


// console.log('Server running at http://127.0.0.1:8800/');
// console.log(__filename);
// console.log(__dirname);
// function hello(){
//     console.log("Hello world");
// }
// var t = setTimeout(hello,3000);
// // clearTimeout(t); // cancel t

// setTimeout(function(){ clearInterval(Counter);
// },10000);

// var i =0;
// //var t 
// var Counter = setInterval(counter,2000);
// function counter(){ 
//     i++;
//   console.log(i);
// }
// setTimeout(function(){ clearInterval(Counter);
// },10000);

// var circle = require('./circle.js');
//  console.log(circle.area(50));
//  console.log(circle.PI);

//-----app.js-----//
// var util = require('util');
// var fs = require('fs');

// function readFile(str, callback){
//     var lines =[];
//     fs.readFile(str, function (err, data) {
//         if (err) throw err; 
//         lines.push(data); 
//         console.log(data.toString());
//     });
//    callback(lines);
// }

// var a, b;
// readFile('./big.txt', function(data){
//     a= data;
// }); 

// readFile('./ten.txt',function(data){
//     b= data;
// }); 
// util.log("a -- "+a);
// util.log("b -- " +b);

//-----app.js-----//
// var assert = require('assert');
// function add (a, b) { 
//     return a + b;
// }
// var expected = add(1,2);
// assert( expected === 3, 'one plus two is three');

//-----app.js-----//
// buf = new Buffer(10);
// buf.write("abcdefghj","ascii");
// console.log(buf.toString('base64'));
// buf = buf.slice(0,5);
// console.log(buf.toString('utf8'));


//-----app.js-----//
// buf = new Buffer(10);
// buf.write("abcdefghj","ascii");
// console.log(buf.toString('base64'));
// buf = buf.slice(0,5);
// console.log(buf.toString('utf8'));

///---------app./js-----//
var crypto=require('crypto');
var fs=require('fs');
var shasum = crypto.createHash('sha1');
var s = fs.ReadStream('ten.txt');
s.on('data',function(d) {
  shasum.update(d);
});
s.on('end',function() {  
    var d = shasum.digest('hex');
  console.log(d+' -- ten.txt');
});

//-----app.js-----//
// var dns = require('dns');
// dns.lookup('www.google.com', function onLookup(err,addresses, family) {
//   console.log('addresses:', addresses);
// });

//-----app.js-----//
// var fs = require('fs'); 
// fs.writeFile('message.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//     console.log('It\'s saved!');
// });
// console.log("Next")

//-----app.js-----//
// var fs=require('fs')
// var readMe = fs.readFileSync('./ten.txt','utf8')
// console.log(readMe)
// fs.mkdir('Project', function(){
// fs.writeFileSync('./Project/Output.txt', readMe)
// })

// var os=require('os');
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.loadavg());

// var readline = require('readline');
// var rl = readline.createInterface({
// input:process.stdin,
// output:process.stdout
// });
// rl.question("What do you think of node.js? (easy/difficult)",function(answer) {
// // TODO: Log the answer in a database
// console.log("Thank you for your valuable feedback:", answer);
// rl.close();});

// var fs = require('fs');
// var zlib = require('zlib');
// var r = fs.createReadStream('ten.txt');
// var z = zlib.createGzip();
// var w = fs.createWriteStream('file.txt.gz');
// r.pipe(z).pipe(w);

// var fs=require('fs')
// var data='Hello World Modi quia maiores. Nihil sapiente etatque. Sint numquam molestiae iure nemo fugiat asperioresaspernatur ducimus. Sit rerum officiis reprehenderit hic nisiodit officia accusantium eos.'
// var writerStream=fs.createWriteStream('output.txt')
// writerStream.write(data,'utf8')
// writerStream.end()
// writerStream.on('finish',function(){
// console.log("Output finish")
// })

// var url = require('url');
// var result =
// url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
// console.log(result);

// var http=require('http')
// var fs=require('fs')
// http.createServer(function(req,res){
// res.writeHead(200,{'Content-Type':'text/html'})
// var myStream =
// fs.createReadStream(__dirname+'/'+'index.html','utf8')
// myStream.pipe(res)
// }).listen(8081,'127.0.0.1')

// var http=require('http')
// var fs=require('fs')
// var myUser={
// "name":"Reese",
// "job":"Coordinator",
// "age":"30"
// }
// http.createServer(function(rew,res){
// res.writeHead(200,{'Content-Type':'application/json'})
// res.end(JSON.stringify(myUser))
// }).listen(8081,'127.0.0.1')

// var http=require('http')
// var fs=require('fs')

// http.createServer(function(req,res){
// if(req.url==='/home'||req.url==='/'){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     var myStream = fs.createReadStream(__dirname+'/'+'index.html','utf8')
//     myStream.pipe(res)
// }
// else if(req.url==='/about'||req.url==='/'){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     var myStream = fs.createReadStream(__dirname+'/'+'about.html','utf8')
//     myStream.pipe(res)
// }
// else{
//     res.writeHead(404,{'Content-Type':'text/html'})
//     var myStream = fs.createReadStream(__dirname+'/'+'notfound.html','utf8')
//     myStream.pipe(res)
//     }
// }).listen(8081,'127.0.0.1')

// var express = require('express')
// var app = express()

// var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   var cb2 = function (req, res) {
//     console.log('CB2')
//     res.send('Hello from C!')
//   }
  
//   app.get('/example/c', [cb0, cb1, cb2])

//   app.listen(8081)

// var express = require('express')
// var app = express()
// app.get('/showForm',function(req,res){
//     res.sendFile(__dirname+"/"+"showForm.html")
// })

// app.get('/showData',function(req,res){
//     data= {
//         fname: req.query.fname,
//         lname: req.query.lname
//     }
//     console.log(data)

//     res.end(JSON.stringify(data))
// })

// app.listen(8081)

// var express = require('express')
// var app = express()
// app.use(express.json()) //For JSON requests
// app.use(express.urlencoded({extended: true}));


// app.get('/showForm',function(req,res){
//     res.sendFile(__dirname+"/"+"showForm.html")
// })

// app.post('/showData',function(req,res){
//     data= {
//         fname: req.body.fname,
//         lname: req.body.lname
//     }
//     console.log(data)

//     res.end(JSON.stringify(data))
//     //res.end("<h1>"+data.fname+" "+data.lname+"</h1>")
// })

// app.listen(8081)

var express = require('express')
var app = express()

app.set('view engine','ejs') //Set View
app.get('/:name',function(req,res){
  var data = {user : "bob",job: "student"}
    res.render('profile',{person: req.params.name,data : data})
})

app.listen(8081)