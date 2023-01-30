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

var circle = require('./circle.js');
 console.log(circle.area(50));
 console.log(circle.PI);