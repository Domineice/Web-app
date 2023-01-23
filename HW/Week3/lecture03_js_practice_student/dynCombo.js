// dynValue.js
//   Illustrates dynamic values
     
// 6213129 Posawat Tangon
var helpers = ["Bob 1234 Bangkok", "Mary 5678 Phuket","Susan 9012 Nakorn Prathom"];
function message(adviceNumber){
    document.getElementById("adviceBox").value = helpers[adviceNumber];
}
// *********************************************************** 
// The event handler function to change the value of the 
//  textarea
//Add your code here